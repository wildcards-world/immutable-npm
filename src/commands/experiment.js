import React, { useEffect } from "react";
import { Text, Color } from "ink";
import Arweave from "../utils/arweave";

const Experiment = () => {
  useEffect(() => {
    // Arweave.createDataTransaction("Denham says hello world");
    Arweave.getTransactionData(
      "z7I8tcZpxEs9JSdxhtUJgD9nUw2uGDZYxIZciSaW1yfnejuXPQngFLGFg9DvGiZC"
    );
  }, []);

  return (
    <Text>
      <Color pink>Experimenting</Color>
    </Text>
  );
};

export default Experiment;
