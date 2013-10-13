var BaseView = require('../base');
module.exports = BaseView.extend({
  className: 'glimpse preparation',

  postRender: function(){

    window.scroller.pin(
      this.$el,
      1200,
      {
        anim: this.getTimeline()
      }
    );
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

