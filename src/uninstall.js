"use strict";
const React = require("react");
const PropTypes = require("prop-types");
const { Text, Color } = require("ink");

const Uninstall = (props) => {
  return (
    <Text>
      Uninstalling package: <Color red> {props.package}</Color>
    </Text>
  );
};

Uninstall.propTypes = {
  package: PropTypes.string,
};

Uninstall.defaultProps = {
  package: "",
};

module.exports = Uninstall;
