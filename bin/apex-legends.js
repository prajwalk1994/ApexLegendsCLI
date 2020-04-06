#!/usr/bin/env node
const pkg = require("../package.json");
const program = require("commander");
const stat = require("../actions/stat");

program
  .version(pkg.version)
  .command("key", "Manage Key -- Get key at https://tracker.gg/developers");

program
  .command("stat")
  .description("Check the Stats of Each Player")
  .action(stat.show);

program.parse(process.argv);
