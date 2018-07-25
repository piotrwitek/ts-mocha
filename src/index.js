try {
  require('ts-node').register({
    project: process.env.__TS_PROJECT_PATH__ || '.',
    fast: true,
  });
  process.env.TS_NODE_PROJECT = process.env.__TS_PROJECT_PATH__;
  require('tsconfig-paths/register');
} catch (error) {
  console.log('[ERROR] ' + error.message);
  process.exit(1);
}
