var BaseView = require('../base');

module.exports = BaseView.extend({
  className: 'viewport',

  postRender: function(){
    this.$('.dial').knob({
      readOnly   : true,
      fgColor    : '#BEC3BC',
      inputColor : '#BEC3BC',
    });
  },

  getGlimpses: function(){
    return [
      'intro',
      'nostalgia',
    ];
  },

  getTemplateData: function(){
    return {
      glimpses: this.getGlimpses().map(function(g){return "glimpses/" + g;}),
    };
  }
});
module.exports.id = 'home/index';
