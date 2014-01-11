var BaseView = require('../base');
module.exports = BaseView.extend({
  className: 'glimpse nostalgia',
  $video: null,

  events: {
    'click .play': 'play'
  },

  postRender: function(){
    this.initVideo();
    this.eavesdrop();
    return true;
  },

  play: function(e) {
    var self = this;
    e.preventDefault();
    new TimelineMax()
      .to(this.$('.overlay'), 0.3, { autoAlpha: 0 })
      .to(this.$('.absolute-center'), 0.4, { autoAlpha: 0,
                                             onComplete: function() {
                                              self.$('video')[0].play();
                                             }});

  },

  eavesdrop: function(){
    this.$el.on("panelsnap:finish", this.activate.bind(this));
  },

  activate: function() {
    this.playTimeline();
  },

  deactivate: function() {
    this.$('video')[0].pause();
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

  playTimeline: function(){
    var self = this;
    new TimelineMax()
      .to(self.$('h1'), 0.5, { autoAlpha: 1 })
      .to(self.$('p'), 1,  { autoAlpha: 1 })
      .to(self.$('.play'), 0.5, { autoAlpha: 1, delay: 3 });

  },

});
module.exports.id ="glimpses/nostalgia";

