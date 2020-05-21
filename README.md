# `inpm` cli tool

> A cli tool for managing immutable node packages using arweave (backwards compatibale with npm)

_Under active development as part of the [New York Blockchain Week Hackathon](https://gitcoin.co/hackathon/new-york-blockchain-week/?tab=hackathon:20)_

<img src="media/demo.svg" width="600">

## Table of Contents

- [`inpm` cli tool](#-inpm--cli-tool)
  - [Table of Contents](#table-of-contents)
  - [How it works](#how-it-works)
    - [Problem](#problem)
    - [Solution](#solution)
  - [Getting started](#getting-started)
  - [Usage](#usage)
  - [Demo of login and publish](#Demo-of-login-and-publish)
  - [Further work](#further-work)
  - [Resources used to build this tool](#resources-used-to-build-this-tool)
  - [Debugging helper commands](#Debugging-helper-commands)

## How it works

### Problem

Npm packages are mutable which means they can be changed and thus break existing software.

Software can be explained like a lego castle, each piece of lego is put together to build the castle much like pieces of code ,or packages, can be put together to build a software application.

If we remove a block of lego from the base of the castle we jeopardize the structural integrity of the castle and it may break and fall.

The same occurs with software, if we change or remove a package from the software application it may break or stop running.

This [article](https://www.theregister.co.uk/2016/03/23/npm_left_pad_chaos/) unpacks an example of how this small problem can break most of modern day JavaScript.

### Solution

Insert Immutable Node Package Manager 🤯

A dead simple npm wrapper that installs the package from arweave an immutable data storage solution leveraging blockchain technology. This tool understands the market adoption of the public npm registry and so is not a replacement but acts as an improvement where by it downloads the package from arweave first and if the package is not found in arweave it falls back to a regular npm request.

The developer ux is focussed around being an improvement that doesn't require any switching costs (apart from the getting started part). The developer can use similar (and all the same) commands to `npm` but rather using `inpm`. `npm` being a tool most developers are already familiar with, while incrementally improving their code base through immutability.

Example usage `inpm install arql-ops`

#### Under the hood

The cli tool is built using react - ink as the cli, arweave as the immutable package storage registry, orbitDB as the decentralized key value storage (mapping packages to arweave endpoints), and where a command is not know falls back to npm.

## Getting started

\*RED FLAG - wallet is in the repo to ensure doesnt break on submission with a minute to go - not ideal but wont keep wallet after this

<!-- // https://arweave.net/J9tpkHVNP9TFJYjl0oB5WIv_k1J5knIU_shlaOOuZMM -->

0. Assumes nodejs & npm is already installed

1. Clone the repo ⤴️
2. Build the program

```
npm run babel
```

3. Make the package executable (babel generated file executable)

```
chmod +x ./bin/cli.js
```

4. Add the package to your system (equivalent to `npm i -g ...`)

```
npm link
```

5. Test by installing some package

- Mutable

```
inpm install leftpad
```

- Immutable

```
inpm install arql-ops
```

\*\* Side note: Adding `--no-warnings` to line 1 of cli improves the output experience although causes to break on some systems

## Usage

```
inpm --help
```

```
inpm install leftpad
```

```
inpm install arql-ops
```

```
inpm login
```

```
inpm zip package-name.tar.gz path-to-package-folder       (note: not packages larger than 10mb)
```

```
inpm publish package-name path-to-tar.gz-package
```

```
inpm {any other normal npm command}
```

```
inpm --version
```

## Demo of login and publish

<img src="media/login-demo.svg" width="600">

## Further work

- Refactor into ReasonML (Functional typed language I would like to get more familiar with) - [binding](https://github.com/cometkim/bs-ink)

- Expand on npm functionality

- Add functionality for installing package versions eg `inpm i arql-ops@0.1.0`

- Autocomplete commands (speed improvement)

- Allow configurable underlying package manager so that users can switch between yarn and npm as the underlying tool

- Change the name to something that is equally simple and doesn't conflict with [inpm](https://www.npmjs.com/package/inpm). Part of me wishes I could contact the developer of `inpm` (npm registry version) and ask to take the name but that would truly go against exactly the problem this package solves 😂

- Have a script that maps npm registry packages onto arweave

## Resources used to build this tool

[creating a node js cli tool](https://x-team.com/blog/a-guide-to-creating-a-nodejs-command/)

[Another tut on creating a nodejs cli tool](https://www.twilio.com/blog/how-to-build-a-cli-with-node-js)

[React for command line lib](https://github.com/vadimdemedes/ink)

[Arweave JS Docs](https://github.com/ArweaveTeam/arweave-js)

[Arweave Block Explorer](https://viewblock.io/arweave)

[Publishing a package to npm](https://zellwk.com/blog/publish-to-npm/)

[TOC tool](https://ecotrust-canada.github.io/markdown-toc/)

[Console to svg tool](https://nbedos.github.io/termtosvg/)

## Debugging helper commands

`tar -zcvf my-package.tar.gz my-package`

`npm unlink --no-save inpm`

`npm unlink`
