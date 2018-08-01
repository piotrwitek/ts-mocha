process.env.__TS_PROJECT_PATH__ = './test/baseline';
require('../..');
const Mocha = require('mocha');
const path = require('path');

const mocha = new Mocha();
mocha.addFile(path.resolve(__dirname, `app.spec.ts`));
mocha.run((failures) => {
  process.on('exit', () => {
    process.exit(failures); // exit with non-zero status if there were failures
  });
});
