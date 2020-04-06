#!/usr/bin/env node
const pkg = require("../package.json");
const program = require("commander");

program
  .version(pkg.version)
  .command("key", "Manage Key -- Get key at https://tracker.gg/developers")
  .parse(process.argv);
