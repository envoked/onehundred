var BaseView = require('../base');
module.exports = BaseView.extend({
  className: 'glimpse intro',
  postRender: function(){
    this.addTweens();
    this.$('.dial').knob();
    return true;
  },

  addTweens: function(){
    var self = this;
   (new TimelineMax()).
        append(TweenMax.from(self.$('h1'), 1, {autoAlpha:0, marginTop:-20})).
        append(TweenMax.fromTo(self.$('.scroll-down'), 1, {autoAlpha: 0}, {'margin-top':"+=10", autoAlpha: 1, yoyo: true, repeat: -1}));

  }
});
module.exports.id ="glimpses/intro";

