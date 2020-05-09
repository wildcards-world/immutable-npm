"use strict";
const React = require("react");
const PropTypes = require("prop-types");
const { Text, Color } = require("ink");

const Install = (props) => {
  return (
    <Text>
      Installing package: <Color green> {props.package}</Color>
    </Text>
  );
};

Install.propTypes = {
  package: PropTypes.string,
};

Install.defaultProps = {
  package: "",
};

module.exports = Install;
