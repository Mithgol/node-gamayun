var simteconf = require('simteconf');

module.exports = function(configOptions){
   var setup = {};
   var configGamayun = simteconf(configOptions.configFilePath, {
      skipNames: ['//', '#']
   });

   var autumnUserDefs = configGamayun.all('AutumnUser'); // or `null`
   if( autumnUserDefs === null ) autumnUserDefs = [];
   setup.autumnUsers = autumnUserDefs.map(function(nextAutumnUserDef){
      var matches = /^\s*(\S+)\s+(\S(?:.*\S)?)\s*$/.exec(nextAutumnUserDef);
      if( matches === null ) return null;

      return {
         name: matches[1],
         path: matches[2]
      };
   }).filter(function(nextAutumnUserDef){
      return nextAutumnUserDef !== null;
   });

   return setup;
};