const ApexAPI = require("../lib/ApexAPI");
const inquirer = require("inquirer");
const KeyManager = require("../lib/KeyManager");
const colors = require("colors");

const stat = {
  show: async () => {
    try {
      console.log("APEX LEGENDS TRACKER".red.bold);
      const keyManager = new KeyManager();
      const key = keyManager.showKey();
      const apexAPI = new ApexAPI(key);

      const input = await inquirer.prompt([
        {
          type: "list",
          name: "platform",
          message: "Choose the platform: ".magenta,
          choices: [
            {
              name: "PSN".blue,
              value: "psn",
            },
            {
              name: "Xbox Live".green,
              value: "xbl",
            },
            {
              name: "Origin PC".red,
              value: "origin",
            },
          ],
        },
        {
          type: "input",
          message: "Enter the Player tag: ".magenta,
          name: "player",
        },
      ]);

      let output = await apexAPI.getStatData(input.platform, input.player);
      if (output) {
        console.log(output);
      }
    } catch (error) {
      console.error(error.message.red);
    }
  },
};

module.exports = stat;
