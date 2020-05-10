#!/usr/bin/env node
import React from "react";
import { render } from "ink";

import initializeHelp from "./help";
import Install from "./install.js";
import Fallback from "./fallback.js";

import Experiment from "./experiment.js"; // For Developing

const [, , ...args] = process.argv;

let command = "";

// Command routing
switch (args[0]) {
  case "i":
  case "install":
    command = <Install args={args} />;
    break;
  case "e":
  case "experiment":
    command = <Experiment args={args} />;
    break;
  default:
    command = <Fallback args={args} />;
}

render(command);
