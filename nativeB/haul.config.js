import { createWebpackConfig } from "haul";
var path = require('path')

export default {
  webpack: createWebpackConfig(({ platform } ) => ({
    entry: `./index.js`,
    devtool: 'source-map',
    resolve: {
      modules: [path.resolve(__dirname, 'node_modules'), 'node_modules']
    }
  }))
};