var BaseView = require('../base');

module.exports = BaseView.extend({
  tagName: 'div',
  id: 'viewport',

  postRender: function(){
    $('#viewport').panelSnap({
      panelSelector: 'section'
    });
  },

  getGlimpses: function(){
    return [
      'intro',
      'daydream',
      'commitment',
    ];
  },

  getTemplateData: function(){
    return {
      glimpses: this.getGlimpses().map(function(g){return "glimpses/" + g;}),
    };
  }
});
module.exports.id = 'home/index';
