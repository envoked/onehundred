var BaseView = require('../base');
module.exports = BaseView.extend({
  className: 'glimpse intro',
  postRender: function(){
    this.$scroller = window.scroller;
    this.addTweens();
    return true;
  },

  addTweens: function(){
    var self = this;
    this.$scroller.addTween(
      self.$el,
      (new TimelineLite().append([
        TweenMax.from(self.$('h3'), 2, {css:{opacity:0}},1)
      ])),
      100
    );


  }
});
module.exports.id ="glimpses/intro";

