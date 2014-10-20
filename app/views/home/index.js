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
      'timing_is_everything',
      'intro',
      'daydream',
      'commitment',
      'base_camp',
      'the_chase_begins',
      'eat_ride',
      'the_people',
      'timing_is_everything',
      'triple_digits',
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
