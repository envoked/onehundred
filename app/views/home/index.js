var BaseView = require('../base');
module.exports = BaseView.extend({
  tagName: 'div',
  id: 'viewport',
  ScrollController: null,

  postRender: function(){
    this.ScrollController = new ScrollMagic();
    this.addScenes();
  },

  addScenes: function() {
    var self = this;
    this.childViews.forEach(function(childView) {
      if(childView.scene) {
        self.ScrollController.addScene(childView.scene);
        console.log('Adding scene for ' + childView.id);
      }
    });
  },

  getGlimpses: function(){
    return [
      'intro',
      'daydream',
      'the-plan',
      'base_camp',
      'migration',
      'arrival',
      'tooth',
      'first_day',
      'back_to_reality',
      'the_realization',
      'the_people',
      'all_is_temporary',
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
