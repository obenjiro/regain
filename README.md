regain
======

Regain control over your source code

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
$ regain COMMAND
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
* [`regain hello [FILE]`](#regain-hello-file)
* [`regain help [COMMAND]`](#regain-help-command)

## `regain hello [FILE]`

describe the command here

```
USAGE
  $ regain hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ regain hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/aiboy/regain/blob/v0.0.0/src/commands/hello.ts)_

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
