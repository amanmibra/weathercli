const {Command, flags} = require('@oclif/command')
const { forecast } = require('../api')

class ForecastCommand extends Command {
  async run() {
    const {argv} = this.parse(ForecastCommand)
    this.log('Collecting weather data...')
    const zip = argv[0];
    const days = argv[1];

    if (!days) days = 5;
    forecast(zip, days)
  }
}

ForecastCommand.description = `
Describe the command here
...
Extra documentation goes here
`

ForecastCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

ForecastCommand.args = [
    {name: 'arg1'},
    {name: 'arg2'},
  ]

module.exports = ForecastCommand
