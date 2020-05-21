import React, { useState, useEffect } from "react";
import { Text, Color, useApp } from "ink";
import Arweave from "../utils/arweave";
import Loader from "../components/loader";
import OrbitDb from "../utils/orbitdb";
import PropTypes from "prop-types";
var fs = require("fs");

const Publish = ({ args }) => {
  const { exit } = useApp();
  const [statusMessage, setStatusMessage] = useState({
    color: "#4F86D4",
    message: "",
  });

  const publishPackage = async () => {
    let key = Arweave.key;

    // const packageName = "my-package";
    // const packageZipPath = "./my-package.tar.gz";
    let packageName = "";
    let packageZipPath = "";

    packageName = args[1];
    if (packageName) {
      setStatusMessage({
        color: "#FEFF03",
        message: "package name: " + packageName,
      });
    } else {
      console.log("Missing 'package-name' argument");
      console.log("type:");
      console.log("inpm --help");
      console.log("for more details");
      exit();
    }

    packageZipPath = args[2];
    if (packageZipPath) {
      setStatusMessage({
        color: "#FEFF03",
        message: "Package Zip Path: " + packageZipPath,
      });
    } else {
      console.log("Missing 'Package zip path' argument");
      console.log("type:");
      console.log("inpm --help");
      console.log("for more details");
      exit();
    }

    let myPackage = fs.readFileSync(packageZipPath);

    setStatusMessage({
      color: "#FE4403",
      message: "Package Read",
    });

    let transaction = await Arweave.arweave.createTransaction(
      {
        data: myPackage,
      },
      key
    );
    transaction.addTag("Content-Type", "application/x-gzip");
    transaction.addTag("package-name", packageName);

    setStatusMessage({
      color: "#FE4403",
      message: "transaction: " + transaction,
    });

    // console.log(transaction);
    const sign = await Arweave.arweave.transactions.sign(transaction, key);

    setStatusMessage({
      color: "#FE4403",
      message: "signed transaction ",
    });

    const response = await Arweave.arweave.transactions.post(transaction);

    setStatusMessage({
      color: "#FE4403",
      message: "response from save to arweave: " + response.toString(),
    });

    const packageId = JSON.parse(response.config.data).id;

    // console.log("response.config.data");
    // console.log(response.config.data);
    // console.log(typeof response.config.data);
    // console.log("response.config.data.id");
    // console.log(response.config.data.id);
    console.log(packageId);
    setStatusMessage({
      color: "#FEFFCC",
      message: "package id: " + packageId,
    });

    const db = await OrbitDb.connectToCollection();
    const savepackage = await OrbitDb.savePackage(db, packageName, packageId);

    console.log(savepackage);

    exit();
  };
  useEffect(() => {
    publishPackage();
  }, []);

  return (
    <>
      <Text>
        <Color pink>Publishing package...</Color>
      </Text>
      <Text>
        <Color hex={statusMessage.color}>{statusMessage.message}</Color>
      </Text>
      <Text>
        <Color grey>This may take a few minutes</Color>
        <Loader />
      </Text>
    </>
  );
};

Publish.propTypes = {
  args: PropTypes.array,
};

Publish.defaultProps = {
  args: [],
};

export default Publish;

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
// console.log(response.config.data);
// console.log(response.status);
// // Arweave.getTransactionData(
// //   "z7I8tcZpxEs9JSdxhtUJgD9nUw2uGDZYxIZciSaW1yfnejuXPQngFLGFg9DvGiZC"
// // );
