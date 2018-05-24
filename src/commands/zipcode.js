const {Command, flags} = require('@oclif/command')
const { exec } = require('child_process')
const { isZipcode } = require('../utils')

class ZipcodeCommand extends Command {
  async run() {
    const {argv} = this.parse(ZipcodeCommand)
    let zip = argv[0];
    // console.log(isZipcode(zip));
    // TODO: Integrate isZipcode for zipcode checking

    exec(`echo ${zip} > ~/.weather-cli`, (error, stdout, stderr) => {
      if (error) {
        this.error(`exec error: ${error}`);
        return;
      }
      this.log('Zipcode successfully written to ~/.weather-cli...');
    });
  }
}

ZipcodeCommand.description = `Set default zipcode.`

ZipcodeCommand.args = [
    {name: 'zipcode'},
  ]

module.exports = ZipcodeCommand
