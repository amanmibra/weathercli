const {Command, flags} = require('@oclif/command')
// import { Command, flags } from '@oclif/command';
const { currently } = require('../api');

class CurrentlyCommand extends Command {
  async run() {
    const {argv} = this.parse(CurrentlyCommand)
    this.log('Collecting weather data...')
    currently(argv[0])
  }
}

CurrentlyCommand.description = `
Describe the command here
...
Extra documentation goes here
`

CurrentlyCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'})
}

CurrentlyCommand.args = [
    {name: 'arg1'},
    {name: 'arg2'},
  ]

module.exports = CurrentlyCommand
