#!/usr/bin/env node
import React from "react";
import { render } from "ink";

import initializeHelp from "./help";
import Install from "./install.js";
import Uninstall from "./uninstall.js";
import Invalid from "./invalid.js";

import Experiment from "./experiment.js";

const [, , ...args] = process.argv;

const arg1 = args[0];
const arg2 = args[1] || "";

let command = "";

switch (arg1) {
  case "install":
    command = <Install package={arg2} />;
    break;
  case "uninstall":
    command = <Uninstall package="{args2}" />;
    break;
  case "experiment":
    command = <Experiment />;
    break;
  default:
    command = <Invalid />;
}

render(command);
