const rewireRHL = require('react-app-rewire-hot-loader');

module.exports = function override(config, env) {
  config = rewireRHL(config, env);
  config.resolve.alias['react-dom'] = '@hot-loader/react-dom';
  return config;
}