/*eslint no-console:0 */
'use strict';
require('core-js/fn/object/assign');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');
const ip='192.168.1.35';
// const ip='localhost';

new WebpackDevServer(webpack(config), config.devServer)
.listen(config.port, ip, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at '+ ip +':' + config.port);
  console.log('Opening your system browser...');
  open('http://'+ ip +':' + config.port);
});
