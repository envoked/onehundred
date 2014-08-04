var BaseView = require('../base');

module.exports = BaseView.extend({
  tagName: 'div',
  id: 'viewport',

  postRender: function(){

  },

  getGlimpses: function(){
    return [
      'intro',
      'daydream',
      'commitment',
      'migration',
      'new_homes',
      'new_friends',
      'old_friends',
      'girlfriends',
      'siblings',
      'fresh_pow',
      'wet_pow',
      'missed_pow',
      'no_pow',
      'fin',
    ];
  },

  getTemplateData: function(){
    return {
      glimpses: this.getGlimpses().map(function(g){return "glimpses/" + g;}),
    };
  }
});
module.exports.id = 'home/index';
