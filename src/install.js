import React, { useEffect } from "react";
import { Text, Color } from "ink";
import PropTypes from "prop-types";
import { exec } from "child_process";
import PackageNameMapper from "./utils/immutable-package-name-mapper";

const Install = (props) => {
  useEffect(() => {
    console.log(`echo hello`);
    exec(
      `npm install ${PackageNameMapper(props.package)}`,
      (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
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
