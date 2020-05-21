// https://github.com/ArweaveTeam/arweave-js
import OrbitDb from "../utils/orbitdb";

// import React, { useEffect, useState } from "react";
const Arweave = require("arweave/node");
let key = "hacky";
try {
  key = require("../../" + require("../../walletPath").walletPath);
  // console.log("key set", key);
} catch {
  // console.warn("key not set yet, run inpm login");
}

const arweaveMainetConfig = {
  host: "arweave.net", // Hostname or IP address for a Arweave host
  port: 443, // Port
  protocol: "https", // Network protocol http or https
  timeout: 10 * 60 * 1000, // Network request timeouts in milliseconds
  logging: false,
};

const arweave = Arweave.init(arweaveMainetConfig);

// useEffect(() => {}, []);

// const connectWallet = async () => {
//   return await arweave.wallets.jwkToAddress(key);
//   // .then((address) => {
//   //   return address;
//   // });
// };

// const createDataTransaction = async (content) => {
//   console.log("store data on arweave");
//   let key = await arweave.wallets.generate();

//   let transaction = await arweave.createTransaction(
//     {
//       data: content,
//     },
//     key
//   );

//   return transaction;
// };

// const addTagsToTransaction = (transaction, tags) => {
//   transaction.addTag("Content-Type", "application/x-gzip");
//   transaction.addTag("key2", "value2");
// };

// const getTransaction = (transactionId) =>
//   arweave.transactions.get(transactionId).then((transaction) => {
//     console.log(transaction);
//   });

// const getTransactionEndpoint? = (transactionId) =>
//   arweave.transactions.get(transactionId).then((transaction) => {
//     console.log(transaction);
//   });

// const getTransactionData = (transactionId) =>
//   arweave.transactions
//     .getData(transactionId, { decode: true, string: true })
//     .then((data) => {
//       console.log(data);
//     });

const getKey = () => {
  const key = "hacky";
  try {
    key = require("../../" + require("../../walletPath").walletPath);
    return key;
    console.log("key set", key);
  } catch {
    return key;
    console.warn("key not set yet, run inpm login");
  }
};

export default {
  arweave,
  // connectWallet,
  // createDataTransaction,
  // getTransaction,
  // getTransactionData,
  getKey,
  key,
  ImmutablePackageNameMapping,
};
