var BaseView = require('../base');
module.exports = BaseView.extend({
  className: 'glimpse preparation',

  postRender: function(){
    return true;
  },

  getTimeline: function(){
    var self = this;
    var tl = new TimelineMax({
    });

    tl.append(TweenMax.to(this.$('.overlay'), 1000, {autoAlpha: 0, scrollTo: {y: 0}}));

    return tl;
  },

});
module.exports.id ="glimpses/preparation";

