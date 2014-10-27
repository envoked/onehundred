var BaseView = require('../base');

module.exports = BaseView.extend({
  tagName: 'section',
  className: 'glimpse intro',
  id: 'intro',

  postRender: function() {
    this.setScene();
  },

  setScene: function() {
    var scene = new ScrollScene({ triggerElement: this.el });
    var self = this;
    scene.setTween(TweenMax.fromTo(
      self.$('h1'),
      1,
      { marginTop: '200px' },
      { marginTop: '0px'}
    ).yoyo(true).repeat(-1));

    this.scene = scene;
  }

});
module.exports.id ="glimpses/intro";
