// https://github.com/ArweaveTeam/arweave-js

const Arweave = require("arweave/node");

const arweaveMainetConfig = {
  host: "arweave.net", // Hostname or IP address for a Arweave host
  port: 443, // Port
  protocol: "https", // Network protocol http or https
  timeout: 20000, // Network request timeouts in milliseconds
  logging: false,
};

const arweave = Arweave.init(arweaveMainetConfig);

const createDataTransaction = async (content) => {
  console.log("store data on arweave");
  let key = await arweave.wallets.generate();

  let transaction = await arweave.createTransaction(
    {
      data: content,
    },
    key
  );

  console.log(transaction);
};

const getTransaction = (transactionId) =>
  arweave.transactions.get(transactionId).then((transaction) => {
    console.log(transaction);
  });

// const getTransactionEndpoint? = (transactionId) =>
//   arweave.transactions.get(transactionId).then((transaction) => {
//     console.log(transaction);
//   });

const getTransactionData = (transactionId) =>
  arweave.transactions
    .getData(transactionId, { decode: true, string: true })
    .then((data) => {
      console.log(data);
    });

const ImmutablePackageNameMapping = (familiarPackageName) => {
  switch (familiarPackageName) {
    case "arql-ops":
      return "https://kybjhezuyftg.arweave.net/ITTPLYoxidZzAJP50FQ03QJUSkkh9iKHcmMcLZOvqtQ";
    default:
      return familiarPackageName;
  }
};

export default {
  arweave,
  createDataTransaction,
  getTransaction,
  getTransactionData,
  ImmutablePackageNameMapping,
};
