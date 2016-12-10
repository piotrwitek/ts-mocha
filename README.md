# TS-Mocha
> Mocha thin wrapper that allows running TypeScript tests using TypeScript runtime (ts-node) to get rid of compilation complexity

### Why?
To setup Mocha with TypeScript you have to figure out how to integrate them to work together, it's not an easy task and require some advanced knowledge.
This package handles for you this complexity and let you use ts-mocha as regular mocha (100% feature parity) but will handle TypeScript `.ts` files.
It will use whatever Mocha is installed in your project (peer dependency).
Also added some usefull options, you can find them below.

### How?
TS-Mocha has only one dependency - ts-node, which is used as a TypeScript runtime to execute your tests and your sources. 

### Options:
-p, --project  Relative or absolute path to directory containing tsconfig (the same as `tsc -p <value>`) [default: "."] 

### Installation

- Local:
```
npm i -D ts-mocha mocha
`./node_modules/.bin/ts-mocha -p src/ src/**/*.spec.ts`
```

- Global:
```
npm i -g ts-mocha mocha
`ts-mocha -p src/ src/**/*.spec.ts`
```