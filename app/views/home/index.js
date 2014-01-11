var BaseView = require('../base');

module.exports = BaseView.extend({
  tagName: 'div',
  id: 'viewport',

  postRender: function(){
    this.$el.panelSnap({
        $menu: false,
        namespace: '.panelSnap',
        slideSpeed: 700,
        directionThreshold: 35,
    });
  },

  getGlimpses: function(){
    return [
      'intro',
      'preface',
      'nostalgia',
      'commitment',
      'migration',
      'fin'
    ];
  },

  getTemplateData: function(){
    return {
      glimpses: this.getGlimpses().map(function(g){return "glimpses/" + g;}),
    };
  }
});
module.exports.id = 'home/index';
