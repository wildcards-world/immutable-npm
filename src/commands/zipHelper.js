import React, { useEffect, useState } from "react";
import { Box, Text, Color, render } from "ink";
import PropTypes from "prop-types";
import { spawn } from "child_process";

import Loader from "../components/loader";
import Spinner from "ink-spinner";

const ZipHelper = ({ args }) => {
  const [state, setState] = useState("");

  useEffect(() => {
    setState("START");
    let tarZipCommand = spawn(`tar`, ["-zcvf", args[1], args[2]]);

    tarZipCommand.stdout.on("data", function (data) {
      // console.log(data.toString());
      setState("SUCCESS");
    });

    tarZipCommand.stderr.on("data", function (data) {
      console.log("stderr: " + data.toString());
      setState("ERROR");
    });

    tarZipCommand.on("exit", function (code) {
      // console.log("Complete: " + code.toString());
      setState("COMPLETE");
    });
  }, []);

  return (
    <Box flexDirection="column" paddingLeft={1}>
      {state == "START" && (
        <>
          <Box paddingTop={1}>
            <Text>
              <Spinner type="earth" />
              Tar zipping dir :
            </Text>
            <Text bold>
              <Color hex="#F6F702"> {args[2]}</Color>
            </Text>
          </Box>
          <Loader />
        </>
      )}
      {state == "SUCCESS" && (
        <Box paddingTop={1}>
          <Color green>Successfully zipped dir:</Color>{" "}
          <Color yellow>{args[2]}</Color>
        </Box>
      )}
      {state == "ERROR" && (
        <Box paddingTop={1}>
          <Color red>Error</Color>
        </Box>
      )}
    </Box>
  );
};

ZipHelper.propTypes = {
  args: PropTypes.array,
};

ZipHelper.defaultProps = {
  args: [],
};

export default ZipHelper;
