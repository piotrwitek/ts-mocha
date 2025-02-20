# TS-Mocha

[![Latest Stable Version](https://img.shields.io/npm/v/ts-mocha.svg)](https://www.npmjs.com/package/ts-mocha)
[![NPM Downloads](https://img.shields.io/npm/dt/ts-mocha.svg)](https://www.npmjs.com/package/ts-mocha)
[![NPM Downloads](https://img.shields.io/npm/dm/ts-mocha.svg)](https://www.npmjs.com/package/ts-mocha)
[![Codeship Status for piotrwitek/ts-mocha](https://app.codeship.com/projects/cb8cc460-1719-0137-28fd-3a09a0997096/status?branch=master)](https://app.codeship.com/projects/328034)
[![Greenkeeper badge](https://badges.greenkeeper.io/piotrwitek/ts-mocha.svg)](https://greenkeeper.io/)

> `ts-mocha` is a streamlined process wrapper for mocha that simplifies running tests written in TypeScript. It automatically handles the necessary configuration and adds custom arguments, saving you from the hassle of managing a complex test setup in your project.

## Why?

Setting up Mocha to work with TypeScript can be challenging and time-consuming. It requires careful configuration to ensure compatibility between the two tools. Additionally, breaking changes in mocha or ts-node can disrupt your setup, forcing you to spend valuable time troubleshooting and fixing it.

`ts-mocha` eliminates these headaches by handling all the configuration for you. It allows you to run tests in TypeScript just as easily as you would with regular Mocha and JavaScript, without worrying about the underlying setup.

On top of that, we’ve included several useful options tailored specifically for TypeScript projects to make your development experience even smoother. Check them out below!

## Installation

```bash
# remember to install mocha if you don't have it already (npm i -D mocha)

npm i -D ts-mocha

# and also required peerDependencies
npm i -D mocha ts-node tsconfig-paths

# also relevant @types packages for best DX: Mocha and Expect
npm i -D @types/mocha @types/expect

# there is also an optional peerDependency if you're using it in your project
npm i -D tsconfig-paths
```

## Usage

### - CLI Usage

CLI options consist of all the options of regular Mocha plus extra options below:

`-p, --project <value>` - relative or absolute path to a `tsconfig.json` file (equivalent of `tsc -p <value>`) [default: "./tsconfig.json"]

**Example:**

```bash
ts-mocha -p src/tsconfig.json src/**/*.spec.ts
```

`--paths` - opt-in feature toggle flag to enable [`tsconfig-paths`](https://www.npmjs.com/package/tsconfig-paths) integration [default: false]

> _For this to work you need to have [`tsconfig-paths`](https://www.npmjs.com/package/tsconfig-paths) package installed in your project_

**Example:**

```bash
ts-mocha --paths -p src/ src/**/*.spec.ts
```

_This feature is required if you're using [path mapping](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping) feature in your project (`paths` compiler option in `tsconfig.json`). When enabled with this package it allows for correct module resolution of aliased modules during TypeScript code execution within NodeJS environment._

Check our test suite for a reference implementation: [Link](./test/paths/tsconfig.json)

`--type-check` - feature toggle flag to enable type checking in ts-node [default: false]

By default `ts-mocha` use the `--transpile-only` option of ts-node to make tests run significantly faster. If you want to run your tests slower but with type-checking you can use the `--type-check` option to enable that.

**Example:**

```bash
ts-mocha --type-check -p src/ src/**/*.spec.ts
```

### Watch Mode

If you want your tests to be automatically rerun when your code changes, add both the `-w` flag and the `--watch-files` flag telling it to watch for specified TypeScript files.

**Example:**

```bash
ts-mocha test/**/*.spec.ts -w --watch-files '**/*.ts'
```

### - Programmatic usage

In code you can use ts-mocha by adding a single require at the beginning of your script:

```javascript
// set env variable to the `tsconfig.json` path before loading mocha (default: './tsconfig.json')
process.env.TS_NODE_PROJECT = "./src/tsconfig.json";

// Optional: set env variable to enable `tsconfig-paths` integration
process.env.TS_CONFIG_PATHS = true;

// register mocha wrapper
require("ts-mocha");
```

For example:

```javascript
process.env.TS_NODE_PROJECT = "./src/tsconfig.json";
require("ts-mocha");
const Mocha = require("mocha");

const mocha = new Mocha();
mocha.addFile(`./src/file.spec.ts`);
mocha.run((failures) => {
  process.on("exit", () => {
    process.exit(failures); // exit with non-zero status if there were failures
  });
});
```

## How it works?

`ts-mocha` relies on a single dependency: ts-node. This TypeScript runtime enables the execution of tests that can import and run TypeScript source files directly.

As a lightweight wrapper, ts-mocha launches a Node process with Mocha and configures the ts-node environment to handle .ts and .tsx files seamlessly. To optimize performance, type-checking is disabled by default, and ts-node operates in transpile-only mode for faster test execution.

> **NOTE**: This package does not include Mocha - Mocha is set as peer dependency, so I don't lock the consumer to a specific Mocha version and I don't have to update this package when Mocha is updated.
