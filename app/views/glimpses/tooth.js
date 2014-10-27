var BaseView = require('../glimpse');
module.exports = BaseView.extend({
  className: 'glimpse tooth',
  id: 'tooth',

  postRender: function() {
    // this.setScene();
  },

  setScene: function() {
    var scene = new ScrollScene({ triggerElement: this.$el });
    var self = this;

    var timeline = (new TimelineMax().
        append(TweenMax.to(self.$('.overlay'), 0.1, {autoAlpha:0})).
        append(TweenMax.from(self.$('.content'), 1, {autoAlpha:0, marginTop:-20}))
    );


    scene.setTween(timeline);
    this.scene = scene;

  }

});
module.exports.id ="glimpses/tooth";

