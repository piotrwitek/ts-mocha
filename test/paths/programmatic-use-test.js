const path = require('path');
process.env.__TS_PROJECT_PATH__ = './test/paths';
require('../..');
const Mocha = require('mocha');

const mocha = new Mocha();
mocha.addFile(path.resolve(__dirname, `app.spec.ts`));
mocha.run((failures) => {
  process.on('exit', () => {
    process.exit(failures); // exit with non-zero status if there were failures
  });
});
