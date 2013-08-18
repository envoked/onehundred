var RendrBase = require('rendr/shared/base/collection');

module.exports = RendrBase.extend({
   url: function(){ return 'http://localhost:3030/api/v1' + this.relUrl;}
});
