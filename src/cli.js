#!/usr/bin/env node
import React from "react";
import { render } from "ink";

import initializeHelp from "./help";
import Install from "./install.js";
import Fallback from "./fallback.js";

import Experiment from "./experiment.js"; // For Developing

const [, , ...args] = process.argv;

// console.log(process);

const arg1 = args[0];
const arg2 = args[1] || "";

let subCommand = args.join(" ");

let command = "";

switch (arg1) {
  case "i":
  case "install":
    command = <Install package={arg2} />;
    break;
  case "e":
  case "experiment":
    command = <Experiment args={args} />;
    break;
  default:
    command = <Fallback args={args} />;
}

render(command);
