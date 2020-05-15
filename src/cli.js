#!/usr/bin/env node
import React from "react";
import { render } from "ink";

import initializeHelp from "./commands/help";
import Install from "./commands/install.js";
import Login from "./commands/login.js";
import Fallback from "./commands/fallback.js";

import Experiment from "./commands/experiment.js"; // For Developing

const [, , ...args] = process.argv;

// Command routing
switch (args[0]) {
  case "i":
  case "install":
    render(<Install args={args} />);
    break;
  case "e":
  case "experiment":
    render(<Experiment args={args} />);
    break;
  case "login":
    render(<Login args={args} />);
    break;
  default:
    render(<Fallback args={args} />);
}
