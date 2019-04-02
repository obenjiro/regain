import { Command, flags } from '@oclif/command';
import chalk from 'chalk';
import * as execa from 'execa';
import * as fs from 'fs-extra';
import * as inquirer from 'inquirer';
import * as path from 'path';

export default class Init extends Command {
  static description = 'generates initial files for documentation';

  static flags = {
    help: flags.help({ char: 'h' }),
    // flag with a value (-t, --type=VALUE)
    type: flags.string({ char: 't', description: 'type of template (one of "discovery", "angular", "react", "vue")' }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: 'f' })
  };

  static args = [{ name: 'file' }];

  async run() {
    const { flags } = this.parse(Init);
    const validTypes = ['discovery', 'angular', 'react', 'vue', 'eslint-plugin'];
    let type;

    if (flags.type) {
      type = flags.type;
    } else {
      const answer: any = await inquirer.prompt([
        {
          name: 'type',
          type: 'list',
          choices: validTypes
        }
      ]);
      type = answer.type;
    }

    if (validTypes.indexOf(type) === -1) {
      throw Error('Unknow template type: ' + type + '. Choose one of: ' + validTypes);
    }

    this.log('Copying template...');

    try {
      const source = path.resolve(__dirname, '../templates', type);
      const sourceCommon = path.resolve(__dirname, '../templates/common');

      await fs.copy(source, process.cwd(), { overwrite: flags.force, errorOnExist: !flags.force });
      await fs.copy(sourceCommon, process.cwd(), { overwrite: flags.force, errorOnExist: !flags.force });
      let pkg = await fs.readFile(process.cwd() + '/package.json', 'utf-8');
      let json = JSON.parse(pkg);

      if (!json.devDependencies) json.devDependencies = {};

      if (type === 'discovery') {
        json.scripts.regain = 'discovery';
        json.devDependencies['@discoveryjs/discovery'] = '^1.0.0-beta.11';
      } else if (type === 'angular') {
        throw Error('Not implemented template type: ' + type);
      } else if (type === 'react') {
        throw Error('Not implemented template type: ' + type);
      } else if (type === 'vue') {
        throw Error('Not implemented template type: ' + type);
      } else if (type === 'eslint-plugin') {
        json.scripts.regain = 'discovery';
        json.devDependencies['@discoveryjs/discovery'] = '^1.0.0-beta.11';
      } else {
        throw Error('Unknow template type: ' + type);
      }

      json.devDependencies['@babel/parser'] = '^7.3.1';
      json.devDependencies['async-directory-tree'] = '^2.3.1';

      fs.writeFileSync(
        process.cwd() + '/package.json',
        JSON.stringify(json, null, 2)
      );

      this.log(`${chalk.green('Done [✔︎]')}`);
    } catch (error) {
      this.error(`${chalk.red(error)}`);
    }

    // Catching an error
    this.log('Installing dependencies...');
    try {
      await execa.shell('npm install');
      this.log(`${chalk.green('Done [✔︎]')}`);
      if (type === 'eslint-plugin') {
        this.log('Preparing dev enviroment...');
        await execa.shell('npm run make-dev');
        this.log(`${chalk.green('Done [✔︎]')}`);
      }
    } catch (error) {
      this.error(`${chalk.red(error)}`);
    }
  }
}
