import React, { useEffect } from "react";
import { Text, Color, Box } from "ink";
import PropTypes from "prop-types";
import { spawn } from "child_process";
import Spinner from "ink-spinner";

const Fallback = ({ args }) => {
  useEffect(() => {
    let npmFallbackCommand = spawn("npm", args);

    npmFallbackCommand.stdout.on("data", function (data) {
      console.log(data.toString());
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
      <Box>
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
  );
};

Fallback.propTypes = {
  args: PropTypes.array,
};

Fallback.defaultProps = {
  args: [],
};

export default Fallback;
