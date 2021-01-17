/** craco.config.js */
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#3d008c',
              '@processing-color': '#3d008c',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
