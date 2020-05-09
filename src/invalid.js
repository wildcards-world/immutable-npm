"use strict";
const React = require("react");
const PropTypes = require("prop-types");
const { Text, Color } = require("ink");

const Invalid = () => {
  return (
    <Text>
      <Color red>Invalid Command</Color>
    </Text>
  );
};

module.exports = Invalid;
