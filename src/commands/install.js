import React, { useEffect, useState } from "react";
import { Box, Text, Color, render, useApp } from "ink";
import PropTypes from "prop-types";
import { spawn } from "child_process";
import orbitdb from "../utils/orbitdb";
// const Arweave = require("arweave/node");
import Arweave from "../utils/arweave";

import Loader from "../components/loader";
import Spinner from "ink-spinner";

const Install = ({ args }) => {
  const { exit } = useApp();
  const [isImmutablePackage, setIsImmutablePackage] = useState(null);
  const [packageName, setPackageName] = useState(args[1]);
  const [state, setState] = useState("");

  const replaceArgsNPMSource = async (args) => {
    let installLocation = await Arweave.ImmutablePackageNameMapping(args[1]);
    setIsImmutablePackage(installLocation != args[1]);
    args[1] = installLocation;
    return args;
  };

  useEffect(() => {
    // let installPackages = async () => {
    setState("START");
    replaceArgsNPMSource(args).then((newArgs) => {
      let npmImmutableSource = spawn("npm", newArgs);

      npmImmutableSource.stdout.on("data", function (data) {
        // console.log(data.toString());
        setState("SUCCESS");
        exit();
      });

      npmImmutableSource.stderr.on("data", function (data) {
        console.log("warnings: " + data.toString());
        setState("ERROR");
        exit();
      });

      npmImmutableSource.on("exit", function (code) {
        // console.log("Complete: " + code.toString());
        setState("COMPLETE");
        exit();
      });
    });
    // };
    // installPackages();
  }, []);

  return (
    <Box flexDirection="column" paddingLeft={1}>
      {state == "START" && (
        <>
          <Box paddingTop={1}>
            <Text>
              <Spinner type="earth" />
              Installing{isImmutablePackage === true && " immutable "}
              {isImmutablePackage === false && " risky "}package:
            </Text>
            <Text bold>
              <Color hex="#F6F702"> {packageName}</Color>
            </Text>
          </Box>
          <Loader />
        </>
      )}
      {state == "SUCCESS" && (
        <Box paddingTop={1}>
          <Color green>Successfully installed:</Color>{" "}
          <Color yellow>{packageName}</Color>
        </Box>
      )}
      {state == "ERROR" && (
        <Box paddingTop={1}>
          <Color orange>Warnings</Color>
        </Box>
      )}
    </Box>
  );
};

Install.propTypes = {
  args: PropTypes.array,
};

Install.defaultProps = {
  args: [],
};

export default Install;
