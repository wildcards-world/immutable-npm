# inpm cli tool

> A cli tool for managing immutable node packages using arweave (backwards compatibale with npm)

_Under active development as part of the [New York Blockchain Week Hackathon](https://gitcoin.co/hackathon/new-york-blockchain-week/?tab=hackathon:20)_

## How it works

---

### Problem

Npm packages are mutable which means they can be changed and thus break existing software.

Software can be explained like a lego castle, each piece of lego is put together to build the castle much like pieces of code ,or packages, can be put together to build a software application.

If we remove a block of lego from the base of the castle we jeopardize the structural integrity of the castle and it may break and fall.

The same occurs with software, if we change or remove a package from the software application it may break or stop running.

This [article](https://www.theregister.co.uk/2016/03/23/npm_left_pad_chaos/) unpacks an example of how this small problem can break most of modern day JavaScript.

### Solution

Insert Immutable Node Package Manager 🤯

A dead simple npm wrapper that installs the package from arweave an immutable data storage solution leveraging blockchain technology. This tool understands the market adoption of the public npm registry and so is not a replacement but acts as an improvement where by it downloads the package from arweave first and if the package is not found in arweave it falls back to a regular npm request.

Example usage `inpm install arql-ops`

#### Under the hood

## Getting started

---

1. Clone the repo ⤴️
2. Build the program

```
npm run babel-build
```

3. Make the package executable

```
chmod +x ./bin/cli.js
```

4. Add the package to your system (equivalent to `npm i -g ...`)

```
npm link
```

5. Test by installing some package

```
inpm install ghost-busters
```

## Usage

---

```
inpm install ghost-busters
```

```
inpm uninstall ghost-busters
```

```
inpm --help
```

```
inpm --version
```

### Resources

[creating a node js cli tool](https://x-team.com/blog/a-guide-to-creating-a-nodejs-command/)

[Another tut on creating a nodejs cli tool](https://www.twilio.com/blog/how-to-build-a-cli-with-node-js)

[React for command line lib](https://github.com/vadimdemedes/ink)

[Arweave JS Docs](https://github.com/ArweaveTeam/arweave-js)
