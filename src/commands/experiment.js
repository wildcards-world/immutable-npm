import React, { useEffect } from "react";
import { Text, Color } from "ink";
import Arweave from "../utils/arweave";
const key = require("../../arweave-wallet-key.json");
// import Query from "../components/query.js";

const Experiment = () => {
  useEffect(async () => {
    let walletPath = "./arweave-wallet-key.json";
    let walletKey = require("../." + walletPath);
    console.log(walletPath);
    console.log(walletKey);

    // Arweave.arweave.transactions
    //   .getStatus("Bcb9D2SZS4HBL7xecHO1u3HONzdUI9Vx-fsjcNyEMHI")
    //   .then((status) => {
    //     console.log("status");
    //     console.log(status);
    //     // 200
    //   });
    // // Get the base64url encoded string
    // Arweave.arweave.transactions
    //   .getData("Bcb9D2SZS4HBL7xecHO1u3HONzdUI9Vx-fsjcNyEMHI", {
    //     decode: true,
    //     string: true,
    //   })
    //   .then((data) => {
    //     console.log("data");
    //     console.log(data);
    //     // CjwhRE9DVFlQRSBodG1sPgo...
    //   });
    // Code to create transaction: Bcb9D2SZS4HBL7xecHO1u3HONzdUI9Vx-fsjcNyEMHI
    // const addr = await Arweave.connectWallet();
    // // console.log(addr);
    // let transaction = await Arweave.arweave.createTransaction(
    //   {
    //     data: "Denham says hello world",
    //   },
    //   key
    // );
    // // transaction.addTag("Content-Type", "application/x-gzip");
    // // transaction.addTag("Content-Type", "text");
    // transaction.addTag("uniquekey", "public value");
    // console.log(transaction);
    // const sign = await Arweave.arweave.transactions.sign(transaction, key);
    // const response = await Arweave.arweave.transactions.post(transaction);
    // console.log(response);
    // console.log(response.status);
    // // Arweave.getTransactionData(
    // //   "z7I8tcZpxEs9JSdxhtUJgD9nUw2uGDZYxIZciSaW1yfnejuXPQngFLGFg9DvGiZC"
    // // );
  }, []);

  return (
    <Text>
      <Color pink>Experimenting</Color>
      {/* <Query /> */}
    </Text>
  );
};

export default Experiment;
