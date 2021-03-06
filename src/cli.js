#!/usr/bin/env node
// --no-warnings <- doesnt work on all systems removing for now
// --no-warning flag should be removed when debugging
import React from "react";
import { render } from "ink";

import initializeHelp from "./commands/help";
import Install from "./commands/install";
import Login from "./commands/login";
import Fallback from "./commands/fallback";
import Publish from "./commands/publish";
import ZipHelper from "./commands/zipHelper";

import Experiment from "./commands/experiment"; // For Developing

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
  case "publish":
    render(<Publish args={args} />);
    break;
  case "zip":
    render(<ZipHelper args={args} />);
    break;
  default:
    render(<Fallback args={args} />);
}
