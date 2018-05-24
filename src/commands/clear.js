const {Command, flags} = require('@oclif/command')
const { exec } = require('child_process')


class ClearCommand extends Command {
  async run() {
    exec(`rm -rf ~/.weather-cli`, (error, stdout, stderr) => {
      if (error) {
        this.error(`exec error: ${error}`);
        return;
      }
      this.log('Successfully deleted ~/.weather-cli...');
    });
  }
}

ClearCommand.description = 'Clears zipcode set by "weather-cli zipcode [ZIPCODE]".'

module.exports = ClearCommand
