process.env.TS_NODE_PROJECT = './test/paths/tsconfig.json';
process.env.TS_TYPE_CHECK = true;
require('../..');
const Mocha = require('mocha');
const path = require('path');
const { TSError } = require('ts-node');

const mocha = new Mocha();
mocha.addFile(path.resolve(__dirname, `app.spec.ts`));

try {
  mocha.run(() => {
    process.on('exit', () => {
      process.exit(1); // exit with non-zero status if the tests were run at all
    });
  });
} catch (error) {
  if (error instanceof TSError) {
    // Success, we found the compile error
  } else {
    throw error;
  }
}
