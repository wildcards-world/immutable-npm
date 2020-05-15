import React, { useEffect, useState } from "react";
import { Text, Color, Box } from "ink";
import PropTypes from "prop-types";
import { spawn } from "child_process";
import Spinner from "ink-spinner";

const Fallback = ({ args }) => {
  const [state, setState] = useState("");
  useEffect(() => {
    setState("START");
    let npmFallbackCommand = spawn("npm", args);

    npmFallbackCommand.stdout.on("data", function (data) {
      console.log(data.toString());
      setState("SUCCESS");
    });

    npmFallbackCommand.stderr.on("data", function (data) {
      console.log("stderr: " + data.toString());
    });

    npmFallbackCommand.on("exit", function (code) {
      console.log("Complete: " + code.toString());
    });
  }, []);

  return (
    <>
      {state == "START" && (
        <>
          <Box padding={1}>
            <Text>
              <Color yellow>Fallback to native npm command</Color>
            </Text>
          </Box>
          <Box>
            <Text>
              <Spinner type="dots" /> Loading...
            </Text>
          </Box>
        </>
      )}
      {state == "SUCCESS" && (
        <Box padding={1}>
          <Color green>Success:</Color>{" "}
          <Color yellow> inpm {args.join(" ")}</Color>
        </Box>
      )}
      {state == "ERROR" && (
        <Box padding={1}>
          <Color red>Error</Color>
        </Box>
      )}
    </>
  );
};

Fallback.propTypes = {
  args: PropTypes.array,
};

Fallback.defaultProps = {
  args: [],
};

export default Fallback;
