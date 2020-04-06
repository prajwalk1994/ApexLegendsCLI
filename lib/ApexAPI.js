const axios = require("axios");
const colors = require("colors");

class ApexAPI {
  constructor(key) {
    this.apiKey = key;
    this.baseUrl = "https://public-api.tracker.gg/v2/apex/standard/profile";
  }

  async getStatData(platform, playerTag) {
    try {
      const requestConfig = {
        method: "get",
        url: `${this.baseUrl}/${platform}/${playerTag}`,
        headers: {
          "TRN-Api-Key": this.apiKey,
        },
      };
      const res = await axios(requestConfig);
      //   console.log(res.data);
      let output = "";
      res.data.data.segments.forEach((segment) => {
        if (segment.type === "overview") {
          //   console.log(segment.stats.level.rank);
          output += `${"Platform User ID: ".red} ${
            res.data.data.platformInfo.platformUserId
          }\n${"Level: ".red}${segment.stats.level.rank}(${
            segment.stats.level.percentile
          })\n${"Kills: ".red}${segment.stats.kills.displayValue}(${
            segment.stats.kills.percentile
          })\n`;
        }
      });
      return output;
    } catch (error) {
      console.error(error.message.red);
    }
  }
}

module.exports = ApexAPI;
