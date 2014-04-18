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
