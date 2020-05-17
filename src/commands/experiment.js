import React, { useEffect } from "react";
import { Text, Color } from "ink";
import OrbitDb from "../utils/orbitdb";

const Experiment = () => {
  useEffect(() => {
    const orbitDBTest = async () => {
      const db = await OrbitDb.connectToCollection();
      console.log(await OrbitDb.getPackage(db, "my-package"));
      console.log(await OrbitDb.getPackage(db, "arql-ops"));
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
