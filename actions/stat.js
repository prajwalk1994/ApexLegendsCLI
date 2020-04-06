const ApexAPI = require("../lib/ApexAPI");
const KeyManager = require("../lib/KeyManager");
const colors = require("colors");

const stat = {
  show: async (opts) => {
    try {
      console.log("APEX LEGENDS TRACKER".red.bold);
      const keyManager = new KeyManager();
      const key = keyManager.showKey();
      const apexAPI = new ApexAPI(key);

      let output = await apexAPI.getStatData(opts.platform, opts.P);
      console.log(output);
    } catch (error) {
      console.error(error.message.red);
    }
  },
};

module.exports = stat;
