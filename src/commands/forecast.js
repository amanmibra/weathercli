const {Command, flags} = require('@oclif/command')
const { forecast } = require('../api')

class ForecastCommand extends Command {
  async run() {
    const {argv} = this.parse(ForecastCommand)
    this.log('Collecting weather data...')
    const zip = argv[0];
    const days = argv[1];

    if (!days) days = 5;
    if (days < 1 || days > 7) {
      console.log('ERROR: days must be between 1 and 7');
    } else {
      forecast(zip, days)
    }
  }
}

ForecastCommand.description = `
Displays forecast for set zipcode over a number of days between 1-7.
`;

ForecastCommand.args = [
    {name: 'zipcode'},
    {name: 'days'},
  ]

module.exports = ForecastCommand
