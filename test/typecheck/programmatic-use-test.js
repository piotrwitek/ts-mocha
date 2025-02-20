process.env.TS_NODE_PROJECT = "./test/paths/tsconfig.json";
process.env.TS_TYPE_CHECK = true;
require("../..");
const Mocha = require("mocha");
const path = require("path");
const { TSError } = require("ts-node");

const mocha = new Mocha();
mocha.addFile(path.resolve(__dirname, `app.spec.ts`));

try {
  console.log("Programmatic use test start.");
  mocha.run(() => {
    process.on("exit", () => {
      console.log("Programmatic use test failed.");
      // exit with non-zero status if the tests were completed
      // as they are expected to fail
      process.exit(1);
    });
  });
} catch (error) {
  if (error instanceof TSError) {
    // Success, we found the type error
    console.log("Programmatic use test complete.");
    process.exit(0);
  } else {
    throw error;
  }
}
