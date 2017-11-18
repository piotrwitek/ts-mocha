process.env.__TS_PROJECT_PATH__ = './test';
require('..');
const Mocha = require('mocha');

const mocha = new Mocha();
mocha.addFile(`./test/app.spec.ts`);
mocha.run((failures) => {
  process.on('exit', () => {
    process.exit(failures); // exit with non-zero status if there were failures
  });
});
