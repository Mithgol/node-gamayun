var path = require('path');
var express = require('express');
var extend = require('extend');

var defaultsGamayun = {
   configFilePath: path.join(__dirname, 'gamayun.conf')
};

module.exports = function(optionsGamayun){
   var app = express();

   var options = extend({}, defaultsGamayun, optionsGamayun);

   return app;
};