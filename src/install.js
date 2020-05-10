import React, { useEffect } from "react";
import { Box, Text, Color } from "ink";
import PropTypes from "prop-types";
import { spawn } from "child_process";
import Arweave from "./utils/arweave";

import Loader from "./components/loader";

const Install = ({ args }) => {
  const replaceArgsNPMSource = (args) => {
    args[1] = Arweave.ImmutablePackageNameMapping(args[1]);
    console.log("/////////////////////");
    console.log(args[1]);
    console.log("/////////////////////");
    return args;
  };

  useEffect(() => {
    let npmImmutableSource = spawn("npm", args);

    npmImmutableSource.stdout.on("data", function (data) {
      console.log(data.toString());
    });

    npmImmutableSource.stderr.on("data", function (data) {
      console.log("stderr: " + data.toString());
    });

    npmImmutableSource.on("exit", function (code) {
      console.log("Complete: " + code.toString());
    });
  }, []);

  return (
    <Box flexDirection="column" padding={2}>
      <Box paddingTop={1}>
        <Text>
          Installing package:
          <Color hex="#1E90FF"> {args[1]}</Color>
        </Text>
      </Box>
      <Loader />
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
