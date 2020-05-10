import React, { useEffect } from "react";
import { Text, Color } from "ink";
import PropTypes from "prop-types";
import { spawn } from "child_process";

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
    <Text>
      <Color green>Fallback to native npm command</Color>
    </Text>
  );
};

Fallback.propTypes = {
  args: PropTypes.array,
};

Fallback.defaultProps = {
  args: [],
};

export default Fallback;
