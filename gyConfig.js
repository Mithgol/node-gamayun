var simteconf = require('simteconf');

module.exports = function(configOptions){
   var setup = {};
   var configGamayun = simteconf(configOptions.configFilePath, {
      skipNames: ['//', '#']
   });

   return setup;
};