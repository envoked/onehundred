var BaseView = require('../base');
module.exports = BaseView.extend({
  className: 'glimpse preparation',

  postRender: function(){

    window.scroller.addTween(
      this.$el,
      this.getTimeline()
    );
    return true;
  },

  getTimeline: function(){
    var self = this;
    var tl = new TimelineMax({
      // onComplete: function(){self.$video.play();}
    });
    tl.add(TweenMax.from(this.$el, 0.7, {css:{autoAlpha:0}}));

    return tl;
  },

});
module.exports.id ="glimpses/preparation";

