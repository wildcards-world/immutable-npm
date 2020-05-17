import React, { useEffect } from "react";
import { Text, Color } from "ink";
import OrbitDb from "../utils/orbitdb";

const Experiment = () => {
  useEffect(async () => {
    await OrbitDb();
  }, []);

  return (
    <Text>
      <Color pink>Experimenting</Color>
    </Text>
  );
};

export default Experiment;
