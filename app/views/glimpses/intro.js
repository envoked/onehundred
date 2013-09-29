var BaseView = require('../base');
module.exports = BaseView.extend({
  className: 'glimpse intro',
  postRender: function(){
    this.$scroller = window.scroller;
    this.addTweens();
    this.$('.dial').knob();
    return true;
  },

  addTweens: function(){
    var self = this;
   (new TimelineMax()).
        append(TweenMax.from(self.$('h1'), 0.75, {autoAlpha:0, delay: 0.75})).
        append(TweenMax.from(self.$('.subtitle'), 1, {'margin-top':-50, autoAlpha: 0, delay: -0.75})).
        append(TweenMax.fromTo(self.$('.scroll-down'), 1, {autoAlpha: 0}, {'margin-top':"+=10", autoAlpha: 1, yoyo: true, repeat: -1}));

  }
});
module.exports.id ="glimpses/intro";

