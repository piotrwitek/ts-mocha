process.env.TS_NODE_PROJECT = "./test/paths/tsconfig.json";
require("../..");
const Mocha = require("mocha");
const path = require("path");

const mocha = new Mocha();
mocha.addFile(path.resolve(__dirname, `app.spec.ts`));

console.log("Programmatic use test start.");
mocha.run((failures) => {
  process.on("exit", () => {
    console.log("Programmatic use test complete.");
    process.exit(failures); // exit with non-zero status if there were failures
  });
});
