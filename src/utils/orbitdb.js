// Decentralised key value store db
const IPFS = require("ipfs");
const OrbitDB = require("orbit-db");

const initializeNewDB = async (collectionName) => {
  const ipfs = await IPFS.create();
  const orbitdb = await OrbitDB.createInstance(ipfs);

  collectionName = collectionName || "inpm";

  // create db
  const options = {
    // Give write access to everyone
    accessController: {
      write: ["*"],
    },
  };
  // TODO: Flesh this out in production -> public write access will result in possible attack vectors

  const db = await orbitdb.keyvalue(collectionName, options);

  // const address = db.address;

  // console.log(address.toString());
};

const connectToCollection = async () => {
  const ipfs = await IPFS.create();
  const orbitdb = await OrbitDB.createInstance(ipfs);

  const db = await orbitdb.open(
    "/orbitdb/zdpuAq87qWjkjJcyz7wFToTXFDA4YsYw2XAVNf6TuStw9DP1F/inpm" // Ipfs hash & collectionName
  );

  await db.load();

  return db;
};

const savePackage = async (db, packageName, packageId) => {
  return await db.put(packageName, packageId);
};

const getPackage = async (db, packageName) => {
  return await db.get(packageName);
};

export default {
  initializeNewDB,
  connectToCollection,
  savePackage,
  getPackage,
};
