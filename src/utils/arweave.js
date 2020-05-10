// To be replaced with an arweave db
// A bunch of exciting arweave things
// https://github.com/ArweaveTeam/arweave-js

const ImmutablePackageNameMapping = (familiarPackageName) => {
  switch (familiarPackageName) {
    case "arql-ops":
      return "https://kybjhezuyftg.arweave.net/ITTPLYoxidZzAJP50FQ03QJUSkkh9iKHcmMcLZOvqtQ";
    default:
      return familiarPackageName;
  }
};

export default { ImmutablePackageNameMapping };
