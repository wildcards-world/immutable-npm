import React, { useState, useEffect } from "react";
import { Box, Text, Color } from "ink";
import Spinner from "ink-spinner";

// TODO: Solve spinner rerender bug :/

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

  // useEffect(() => {
  //   let timer2 = setTimeout(
  //     () =>
  //       setWaitPeriodStatus({
  //         loaderType: <Spinner type="moon" />,
  //         text: <Color green>Still Still loading</Color>,
  //       }),
  //     3000
  //   );
  //   return () => clearTimeout(timer2);
  // }, []);

  // useEffect(() => {
  //   let timer2 = setTimeout(
  //     () =>
  //       setWaitPeriodStatus({
  //         loaderType: <Spinner type="earth" />,
  //         text: <Color green>Still Still Still loading</Color>,
  //       }),
  //     5000
  //   );
  //   return () => clearTimeout(timer2);
  // }, []);

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
