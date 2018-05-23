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
Displays current weather for set zipcode.
`

CurrentlyCommand.args = [
    {name: 'zipcode'},
  ]

module.exports = CurrentlyCommand
