var BaseView = require('../base');
module.exports = BaseView.extend({
  className: 'glimpse preface',

  getTimeline: function(){
    var self = this;
    return (new TimelineMax().
            append(TweenMax.from(self.$el, 100, {autoAlpha: 0, ease: Quad.easeIn })));
  },

});
module.exports.id ="glimpses/preface";

