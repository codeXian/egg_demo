'use strict';

module.exports = appInfo => {
  const config = (exports = {
    security: {
      csrf: {
        enable: false,
      },
    },
  });

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1544354789636_392';

  // add your config here
  config.middleware = [];

  return config;
};
