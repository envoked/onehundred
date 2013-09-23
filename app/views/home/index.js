var BaseView = require('../base');

module.exports = BaseView.extend({
  className: 'viewport',

  getGlimpses: function(){
    return [
      'intro',
      'nostalgia'
    ];
  },

  getTemplateData: function(){
    return {
      glimpses: this.getGlimpses().map(function(g){return "glimpses/" + g;}),
    };
  }
});
module.exports.id = 'home/index';
