import React, { useState, useEffect } from "react";
import { Box, Text, Color } from "ink";
import Spinner from "ink-spinner";

// TODO: Solve spinner rerender bug with more than 2 loaders :/

const Counter = () => {
  const [waitPeriodStatus, setWaitPeriodStatus] = useState({
    loaderType: <Spinner type="moon" />,
    text: <Color grey>Loading</Color>,
  });

  useEffect(() => {
    let timer = setTimeout(
      () =>
        setWaitPeriodStatus({
          loaderType: <Spinner type="pong" />,
          text: <Color grey>loading...</Color>,
        }),
      3000
    );
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box paddingTop={1} paddingBottom={1}>
      <Text>
        <Color grey>{waitPeriodStatus.loaderType}</Color>
      </Text>
      <Text> {waitPeriodStatus.text}</Text>
    </Box>
  );
};

export default Counter;
