try {
  require('ts-node').register({
    project: process.env.__TS_PROJECT_PATH__ || '.',
    fast: true,
  });
} catch (error) {
  console.log('[ERROR] ' + error.message);
  process.exit(1);
}