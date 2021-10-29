process.env.TS_NODE_PROJECT = './test/paths/tsconfig.json';
require('../..');
const Mocha = require('mocha');
const path = require('path');

const mocha = new Mocha();
mocha.addFile(path.resolve(__dirname, `app.spec.ts`));
// Add a test with a compile error to prove that type checks are off by default.
mocha.addFile(path.resolve(__dirname, `../typecheck/app.spec.ts`));
mocha.run((failures) => {
  process.on('exit', () => {
    process.exit(failures); // exit with non-zero status if there were failures
  });
});
