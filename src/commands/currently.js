const {Command, flags} = require('@oclif/command')
const { currently } = require('../api');
const { exec } = require('child_process')


class CurrentlyCommand extends Command {
  async run() {
    const {argv} = this.parse(CurrentlyCommand)

    // Checking for zipcode and executing API call
    this.log('Checking for saved zipcode...');
    exec(`cat ~/.weather-cli`, (error, stdout, stderr) => {
      if (error) {
        this.log(`Unable to grab Zipcode from ~./.weather-cli: ${error}`);
        this.log('Collecting weather data...')
        currently(argv[0])
        return;
      }
      this.log('Found zipcode in ~./weather-cli!');
      this.log('Collecting weather data...')
      currently(stdout)
    });


  }
}

CurrentlyCommand.description = `Displays current weather for set zipcode.`

CurrentlyCommand.args = [
    {name: 'zipcode'},
  ]

module.exports = CurrentlyCommand
