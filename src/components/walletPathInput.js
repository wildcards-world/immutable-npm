import React from "react";
import { render, Box, useApp } from "ink";
import { UncontrolledTextInput } from "ink-text-input";
import useExit from "../utils/useExit";
var fs = require("fs");

const SearchQuery = () => {
  const { exit } = useApp();
  const handleSubmit = (query) => {
    fs.writeFile(
      "./walletPath.json",
      '{ "walletPath": "' + query + '"}',
      () => {
        console.log("Saved path");
        exit();
      }
    );
  };

  return (
    <Box>
      <Box marginRight={1}>Type in the directory path to your wallet:</Box>
      <UncontrolledTextInput onSubmit={handleSubmit} />
    </Box>
  );
};

export default SearchQuery;
