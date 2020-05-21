import React, { useEffect } from "react";
import { Text, Color } from "ink";
import OrbitDb from "../utils/orbitdb";

const Experiment = () => {
  useEffect(() => {
    const orbitDBTest = async () => {
      const db = await OrbitDb.connectToCollection();
      console.log(await OrbitDb.getPackage(db, "inpm"));
    };
    orbitDBTest();
  }, []);

  return (
    <Text>
      <Color pink>Experimenting</Color>
    </Text>
  );
};

export default Experiment;
