import React, { useEffect } from "react";
import { Text, Color } from "ink";
import PropTypes from "prop-types";
import { exec } from "child_process";

const Install = (props) => {
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
