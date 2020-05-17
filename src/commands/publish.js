import React, { useEffect } from "react";
import { Text, Color, useApp } from "ink";
import Arweave from "../utils/arweave";
import Loader from "../components/loader";
var fs = require("fs");

const Publish = () => {
  const { exit } = useApp();
  useEffect(async () => {
    let key = Arweave.key;

    //SBQggLMiGYKphbnTUsfoLcRo4kYeuUpHCdxHHNakZow

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
    let myPackage = fs.readFileSync("./my-package.tar.gz");

    let transaction = await Arweave.arweave.createTransaction(
      {
        data: myPackage,
      },
      key
    );
    transaction.addTag("Content-Type", "application/x-gzip");
    transaction.addTag("package-name", "my-package");
    console.log(transaction);
    const sign = await Arweave.arweave.transactions.sign(transaction, key);
    const response = await Arweave.arweave.transactions.post(transaction);
    console.log(response.config.data);
    console.log(response.status);
    // // Arweave.getTransactionData(
    // //   "z7I8tcZpxEs9JSdxhtUJgD9nUw2uGDZYxIZciSaW1yfnejuXPQngFLGFg9DvGiZC"
    // // );
    exit();
  }, []);

  return (
    <>
      <Text>
        <Color pink>Publishing package...</Color>
      </Text>
      <Text>
        <Color grey>This may take a few minutes</Color>
        <Loader />
      </Text>
    </>
  );
};

export default Publish;
