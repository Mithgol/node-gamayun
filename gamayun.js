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

   setupGamayun.autumnUsers = setupGamayun.autumnUsers.map(function(nextUser){
      var fullPath = path.resolve(__dirname, nextUser.path);
      (function(){
         try {
            nextUser.autumn = require(fullPath);
         } catch(e) {
            nextUser = null;
         }
      })();
   }).filter(function(nextAutumnUserDef){
      return nextAutumnUserDef !== null;
   });

   return app;
};