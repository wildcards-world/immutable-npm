import React, { useEffect } from "react";
import { Text, Color } from "ink";
import OrbitDb from "../utils/orbitdb";
import Arweave from "../utils/arweave";

const Experiment = () => {
  useEffect(() => {
    const orbitDBTest = async () => {
      // const db = await OrbitDb.connectToCollection();
      // console.log(await OrbitDb.getPackage(db, "inpm"));
      Arweave.arweave.transactions
        .getStatus("J9tpkHVNP9TFJYjl0oB5WIv_k1J5knIU_shlaOOuZMM")
        .then((status) => {
          console.log(status);
          // 200
        });
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
