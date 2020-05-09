#!/usr/bin/env node
const React = require("react");
const importJsx = require("import-jsx");
const { render, Color } = require("ink");
const initializeHelp = require("./src/help");

const [, , ...args] = process.argv;

let command = "";

switch (args[0]) {
  case "install":
    command = importJsx("./src/install");
    break;
  case "uninstall":
    command = importJsx("./src/uninstall");
    break;
  default:
    command = importJsx("./src/invalid");
}

render(React.createElement(command, { package: "ghost-busters" }));
