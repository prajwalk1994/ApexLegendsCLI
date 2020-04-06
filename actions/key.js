const inquirer = require("inquirer");
const colors = require("colors");
const KeyManager = require("../lib/KeyManager");

const key = {
  show: () => {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.showKey();
      console.log("Current API Key: ".green + key);
    } catch (error) {
      console.error(error.message.red);
    }
  },
  set: async () => {
    try {
      const keyManager = new KeyManager();
      const input = await inquirer.prompt([
        {
          name: "key",
          type: "input",
          message: "Enter API key: ".blue,
          validate: (input) => (input === "" ? "The API key is invalid" : true),
        },
      ]);
      keyManager.setKey(input.key);
      console.log("API Key Set .!".bgYellow);
    } catch (error) {
      console.error(error.message.red);
    }
  },
  remove: () => {
    try {
      const keyManager = new KeyManager();
      keyManager.removeKey();
      console.log("API Key Removed..!".bgRed);
    } catch (error) {
      console.error(error.message.red);
    }
  },
};

module.exports = key;
