var BaseView = require('../base');
module.exports = BaseView.extend({
  className: 'glimpse nostalgia',
  $video: null,

  postRender: function(){
    this.initVideo();

    window.scroller.addTween(
      this.$el,
      this.getTimeline()
    );
    return true;
  },

  initVideo: function(){
    this.$el.videoBG({
      mp4    : '/videos/nostalgia/nostalgia.mp4',
      webm   : '/videos/nostalgia/nostalgia.webm',
      ogv    : '/videos/nostalgia/nostalgia.ogg',
      poster : '/videos/nostalgia/nostalgia.jpg',
      scale  : true,
      zIndex : 0,
    });
    this.$video = this.$('video')[0];
    this.$video.pause();
  },

  getTimeline: function(){
    var self = this;
    var tl = new TimelineMax({
      onComplete: function(){self.$video.play();}
    });
    tl.add(TweenMax.from(this.$el, 0.7, {css:{autoAlpha:0}}));

    return tl;
  },

});
module.exports.id ="glimpses/nostalgia";

