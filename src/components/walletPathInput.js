import React from "react";
import { render, Box, useApp } from "ink";
import { UncontrolledTextInput } from "ink-text-input";
var fs = require("fs");

const WalletPathInput = () => {
  const { exit } = useApp();
  const handleSubmit = (query) => {
    fs.writeFile(
      "./walletPath.json",
      '{ "walletPath": "' + query + '"}',
      () => {
        console.log("Saved path to your wallet");
        exit();
      }
    );
  };

  return (
    <Box>
      <Box marginRight={1}>
        Type in the directory path to your wallet (relative to repo root):
      </Box>
      <UncontrolledTextInput onSubmit={handleSubmit} />
    </Box>
  );
};

export default WalletPathInput;
