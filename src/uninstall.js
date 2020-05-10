import React, { useEffect } from "react";
import { Text, Color } from "ink";
import PropTypes from "prop-types";
import { exec } from "child_process";

const Uninstall = (props) => {
  return (
    <Text>
      Uninstalling package:
      <Color blue> {props.package}</Color>
    </Text>
  );
};

Uninstall.propTypes = {
  package: PropTypes.string,
};

Uninstall.defaultProps = {
  package: "",
};

export default Uninstall;
