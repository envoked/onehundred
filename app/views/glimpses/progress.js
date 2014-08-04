var BaseView = require('../base');
module.exports = BaseView.extend({
  className: 'glimpse progress',
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
    this.getTimeline();

  },

  eavesdrop: function(){
    this.$el.on("panelsnap:finish", this.activate.bind(this));
    this.$el.on("panelsnap:deactivate", this.deactivate.bind(this));
  },

  activate: function() {
    this.getFocusTimeline();
  },

  deactivate: function() {
    this.$('video')[0].pause();
    this.getTimeline().reverse();
    this.getFocusTimeline().reverse();
  },

  getTimeline: function() {
    return new TimelineMax()
      .fromTo(this.$('.overlay'), 0.3, { autoAlpha: 0.75}, { autoAlpha: 0 })
      .fromTo(this.$('.absolute-center'), 0.4,
        { autoAlpha: 1 },

        { autoAlpha: 0, onComplete: function() {
                          self.$('video')[0].play();
                        }});
  },

  getFocusTimeline: function() {
    var self = this;
    var tl = new TimelineMax()
      .fromTo(self.$('h1'), 0.5, { autoAlpha: 0 }, { autoAlpha: 1 })
      .fromTo(self.$('p'), 1, { autoAlpha: 0 }, { autoAlpha: 1 })
      .fromTo(self.$('.play'), 0.5, { autoAlpha: 0 }, { autoAlpha: 1, delay: 1.5 });
    return tl;
  },

  initVideo: function(){
    this.$el.videoBG({
      mp4    : '/videos/daydream/daydream.mp4',
      webm   : '/videos/daydream/daydream.webm',
      ogv    : '/videos/daydream/daydream.ogg',
      poster : '/videos/daydream/daydream.jpg',
      scale  : true,
      zIndex : 0,
      autoPlay: false,
    });
    $('video')[0].pause();
  }

});
module.exports.id ="glimpses/daydream";

