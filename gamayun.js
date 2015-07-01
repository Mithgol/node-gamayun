var path = require('path');
var express = require('express');
var extend = require('extend');
var configReader = require('./gyConfig.js');

var defaultsGamayun = {
   configFilePath: path.join(__dirname, 'gamayun.conf')
};

module.exports = function(optionsGamayun){
   var app = express();

   var options = extend({}, defaultsGamayun, optionsGamayun);
   var setupGamayun = configReader(options);

   return app;
};