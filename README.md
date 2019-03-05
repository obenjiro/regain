regain
======

Regain control over your source code. This cli tool allow you to generate project birdview, documentation, statistics, control technical dept. All of that with a few simple queries using Regain DSL.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/regain.svg)](https://npmjs.org/package/regain)
[![Downloads/week](https://img.shields.io/npm/dw/regain.svg)](https://npmjs.org/package/regain)
[![License](https://img.shields.io/npm/l/regain.svg)](https://github.com/aiboy/regain/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g regain
$ regain init
running command...
$ regain (-v|--version|version)
regain/0.0.0 darwin-x64 node-v11.3.0
$ regain --help [COMMAND]
USAGE
  $ regain COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`regain init [FILE]`](#regain-init-file)
* [`regain help [COMMAND]`](#regain-help-command)

## `regain init [FILE]`

describe the command here

```
USAGE
  $ regain init [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -t, --type=type  type of template (one of "discovery", "angular", "react", "vue")
```

_See code: [src/commands/init.ts](https://github.com/aiboy/regain/blob/v0.0.0/src/commands/init.ts)_

## `regain help [COMMAND]`

display help for regain

```
USAGE
  $ regain help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_

<!-- commandsstop -->
