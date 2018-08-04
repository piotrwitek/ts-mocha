try {
  // default ts-node config
  const project = process.env.TS_NODE_PROJECT || './tsconfig.json';
  require('ts-node').register({
    project,
    transpileOnly: true,
  });
  // opt-in tsconfig-paths config
  if (process.env.TS_CONFIG_PATHS) {
    require('tsconfig-paths/register');
  }
} catch (error) {
  console.log('[ERROR] ' + error.message);
  process.exit(1);
}
