weather-cli
===========

Basic multi-command CLI using oclif and OpenWeatherMap

[![Version](https://img.shields.io/npm/v/weather-cli.svg)](https://npmjs.org/package/weather-cli)
[![CircleCI](https://circleci.com/gh/amanmibra/weather-cli/tree/master.svg?style=shield)](https://circleci.com/gh/amanmibra/weather-cli/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/amanmibra/weather-cli?branch=master&svg=true)](https://ci.appveyor.com/project/amanmibra/weather-cli/branch/master)
[![Codecov](https://codecov.io/gh/amanmibra/weather-cli/branch/master/graph/badge.svg)](https://codecov.io/gh/amanmibra/weather-cli)
[![Downloads/week](https://img.shields.io/npm/dw/weather-cli.svg)](https://npmjs.org/package/weather-cli)
[![License](https://img.shields.io/npm/l/weather-cli.svg)](https://github.com/amanmibra/weather-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g weather-cli
$ weather-cli COMMAND
running command...
$ weather-cli (-v|--version|version)
weather-cli/0.0.1 darwin-x64 node-v10.1.0
$ weather-cli --help [COMMAND]
USAGE
  $ weather-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`weather-cli hello`](#weather-cli-hello)
* [`weather-cli help [COMMAND]`](#weather-cli-help-command)

## `weather-cli hello`

Describe the command here

```
USAGE
  $ weather-cli hello

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  Describe the command here
  ...
  Extra documentation goes here
```

_See code: [src/commands/hello.js](https://github.com/amanmibra/weather-cli/blob/v0.0.1/src/commands/hello.js)_

## `weather-cli help [COMMAND]`

display help for weather-cli

```
USAGE
  $ weather-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v1.2.11/src/commands/help.ts)_
<!-- commandsstop -->
