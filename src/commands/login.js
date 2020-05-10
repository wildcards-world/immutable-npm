import React, { useEffect, useState } from "react";
import { render, useInput, Box, AppContext, Text, Color } from "ink";
import Loader from "../components/loader";
import PropTypes from "prop-types";

const TextInput = () => {
  const [inputText, setInputText] = useState("");

  useInput((input, key) => {
    if (key.enter) {
      console.log("save the path to config");
      setInputText("");
    }
    setInputText(inputText + input);
  });

  return (
    <Box flexDirection="column">
      <Box paddingLeft={1} paddingTop={1}>
        | > {inputText}
      </Box>
    </Box>
  );
};

const Login = ({ args }) => {
  useEffect(() => {}, []);

  return (
    <Box flexDirection="column" padding={2}>
      <Box paddingTop={1}>
        <Text>Login using your Arweave wallet.</Text>
        <Text>Follow this link to get a wallet if you don't have one yet</Text>
        <Text underline>
          <Color hex="#1E90FF"> https://www.arweave.org/wallet</Color>
        </Text>
      </Box>
      <Box>
        <Text underline>
          <TextInput />
        </Text>
      </Box>
      {/* <Loader /> */}
    </Box>
  );
};

Login.propTypes = {
  args: PropTypes.array,
};

Login.defaultProps = {
  args: [],
};

export default Login;
