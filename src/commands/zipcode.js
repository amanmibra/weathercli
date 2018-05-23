const {Command, flags} = require('@oclif/command')
const { exec } = require('child_process')

class ZipcodeCommand extends Command {
  async run() {
    const {argv} = this.parse(ZipcodeCommand)
    let zip = argv[0];

    exec(`echo ${zip} > ~/.weather-cli`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log('Zipcode successfully written to ~/.weather-cli...');
    });
  }
}

ZipcodeCommand.description = `Set default zipcode.`

ZipcodeCommand.args = [
    {name: 'zipcode'},
  ]

module.exports = ZipcodeCommand
