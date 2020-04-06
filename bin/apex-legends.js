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
  .option("-P <type>", "Enter the player tag of the platform")
  .option("--platform <type>", "Platform of the Player (PSN, Origin, Xbox)")
  .action((opts) => stat.show(opts));

program.parse(process.argv);
