const Configstore = require("Configstore");
const pkg = require("../package.json");

class KeyManager {
  constructor() {
    this.conf = new Configstore(pkg.name);
  }

  setKey(key) {
    this.conf.set("apiKey", key);
    return key;
  }

  showKey() {
    const key = this.conf.get("apiKey");
    if (!key) {
      throw new Error(
        "API Key is not present -- Get Key at https://tracker.gg/developers"
      );
    }
    return key;
  }

  removeKey() {
    const key = this.conf.get("apiKey");
    if (!key) {
      throw new Error(
        "API Key is not present -- Get Key at https://tracker.gg/developers"
      );
    }
    this.conf.delete("apiKey");
    return;
  }
}

module.exports = KeyManager;
