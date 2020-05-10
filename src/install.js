import React, { useEffect } from "react";
import { Text, Color } from "ink";
import PropTypes from "prop-types";
import { exec } from "child_process";
import Arweave from "./utils/arweave";

const Install = (props) => {
  useEffect(() => {
    console.log(`echo hello`);
    exec(
      `npm install ${Arweave.ImmutablePackageNameMapping(props.package)}`,
      (error, stdout, stderr) => {
        if (error) {
          return (
            <Text>
              Error:
              <Color red> {error.message} </Color>
            </Text>
          );
        }
        if (stderr) {
          return (
            <Text>
              Std Error:
              <Color red> {stderr} </Color>
            </Text>
          );
        }
        console.log(`stand out :${stdout}`);
      }
    );
  }, []);

  return (
    <Text>
      Installing package:
      <Color green> {props.package}</Color>
    </Text>
  );
};

Install.propTypes = {
  package: PropTypes.string,
};

Install.defaultProps = {
  package: "",
};

export default Install;
