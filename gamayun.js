var path = require('path');

var defaultsGamayun = {
   configFilePath: path.join(__dirname, 'gamayun.conf')
};

module.exports = function(optionsGamayun){
   var app = express();

   var options = extend({}, defaultsGamayun, optionsGamayun);

   return app;
};