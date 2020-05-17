// Decentralised key value store db

const IPFS = require("ipfs");
const OrbitDB = require("orbit-db");

// Create IPFS instance

const experiment = async () => {
  const ipfs = await IPFS.create();

  const orbitdb = await OrbitDB.createInstance(ipfs);
  // TODO: Flesh this out in production -> public write access will result in possible attack vectors
  const options = {
    // Give write access to everyone
    accessController: {
      write: ["*"],
    },
  };

  // create db
  // const db = await orbitdb.keyvalue("inpm", options);

  const db = await orbitdb.open(
    "/orbitdb/zdpuAq87qWjkjJcyz7wFToTXFDA4YsYw2XAVNf6TuStw9DP1F/inpm"
  );
  const address = db.address;

  console.log(address.toString());

  await db.put("my-package", "E1lBJ20fspWahlNxOl5Gn6Whduhveqo7qe7Sl5Hf0Eo");
  await db.put("arql-ops", "ITTPLYoxidZzAJP50FQ03QJUSkkh9iKHcmMcLZOvqtQ");

  const packageId = await db.get("my-package");
  const arqpackageId = await db.get("arql-ops");

  console.log(packageId);
  console.log(arqpackageId);
};

export default experiment;
