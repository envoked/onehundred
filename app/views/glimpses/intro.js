var BaseView = require('../base');
module.exports = BaseView.extend({
  tagName: 'section',
  className: 'glimpse intro',

  postRender: function(){
    return true;
  },

  addTweens: function(){
    var self = this;
    (new TimelineMax()).
        append(TweenMax.from(self.$('h1'), 1, {autoAlpha:0, marginTop:-20}))

  }
});
module.exports.id ="glimpses/intro";
