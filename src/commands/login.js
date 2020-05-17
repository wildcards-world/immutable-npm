import React from "react";
import { Box, Text, Color } from "ink";
import WalletPathInput from "../components/walletPathInput";

const Login = () => {
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
          <WalletPathInput />
        </Text>
      </Box>
    </Box>
  );
};

export default Login;
