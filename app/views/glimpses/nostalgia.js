var BaseView = require('../base');
module.exports = BaseView.extend({
  className: 'glimpse nostalgia',
  $video: null,

  postRender: function(){
    this.initVideo();

    window.scroller.pin(
      this.$el,
      1000,
      {
        anim: this.getTimeline()
      }
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
      autoPlay: false,
    });
    $('video')[0].pause();
  },

  getTimeline: function(){
    var self = this;
    return (new TimelineMax().
      append(TweenMax.from(self.$('.absolute-center'), 100, {autoAlpha:0, delay: 0.75})).
      append([TweenMax.to(self.$('.overlay'), 100,{
        autoAlpha: 0,
        onComplete: (function(){$('video')[0].play();}),
        delay: -0.3
      }),
      TweenMax.to(self.$('.absolute-center'), 100, {autoAlpha:0, delay: 0.75})
      ])
    );
  },

});
module.exports.id ="glimpses/nostalgia";

