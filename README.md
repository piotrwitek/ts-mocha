# TS-Mocha

[![Greenkeeper badge](https://badges.greenkeeper.io/piotrwitek/ts-mocha.svg)](https://greenkeeper.io/)
> Mocha thin wrapper that allows running TypeScript tests with TypeScript runtime (ts-node) to get rid of compilation complexity.
> All Mocha features are available without any limitation.

### Why?
To setup Mocha with TypeScript you have to figure out how to integrate them to work together, it's not an easy task and require some advanced knowledge.
This package handles for you this complexity and let you use ts-mocha just as regular mocha that will handle TypeScript `.ts` and `.tsx` files. Also added some useful options, you can find them below.

### How?
TS-Mocha has one only dependency - ts-node, which is used as a TypeScript runtime to execute tests that can import and run imported TypeScript source files as well. It is as a thin wrapper that run local mocha package and set up ts-node environment to handle `.ts` and `.tsx` files. To speed up TypeScript tests execution type-checking is disabled, using only transpile module.

#### __NOTE__: This package does not include Mocha - I have set Mocha as peer dependency on purpose, so I don't lock consumer to a specific Mocha version but most importantly, I don't have to update this package when Mocha is updated, and all the new features will be available automatically from your local Mocha package. Also integration with your existing Mocha setup is non-invasive.

#### __PRO TIP__: To make your developer experience better I recommend to run type-checking in a separate process by starting TSC compiler (preferably in watch mode) in you terminal with --noEmit and --project flags.

### Options:
-p, --project  Relative or absolute path to directory containing tsconfig (the same as `tsc -p <value>`) [default: "."] 

### Installation

- Local:
```bash
# remember to install mocha if you don't have it already (npm i -D mocha)
npm i -D ts-mocha
`./node_modules/.bin/ts-mocha -p src/ src/**/*.spec.ts`
```

- Global:
```bash
# remember to install mocha if you don't have it already (npm i -g mocha)
npm i -g ts-mocha
`ts-mocha -p src/ src/**/*.spec.ts`
```

## In code scripts

In code you can use ts-mocha by adding a single require at the beginning of your script:

```javascript
require('ts-mocha');
```

For example:

```javascript
require('ts-mocha');
const Mocha = require('mocha');
mocha.addFile(`yourfile.test.ts`);
mocha.run((failures) => {
    process.on('exit', () => {
        process.exit(failures); // exit with non-zero status if there were failures
    });
});
```