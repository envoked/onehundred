var BaseView = require('../base');
module.exports = BaseView.extend({
  className: 'glimpse migration',
  $video: null,
  NUM_MILES: 1999, // number of miles to destination

  events: {
    'click .play': 'play'
  },

  postRender: function(){
    this.initVideo();
    this.eavesdrop();
    this.fadePlay();

    return true;
  },

  fadePlay: function() {
    TweenMax.to(this.$('.play'), 0.5, { autoAlpha: 1, delay: 1, display: 'block' });
  },

  play: function(e) {
    var self = this;
    e.preventDefault();
    new TimelineMax()
      .to(self.$('.overlay'), 0.3, { autoAlpha: 0, display: 'none' })
      .to(self.$('.play'), 0.5, { autoAlpha: 0, display: 'none' })
      .to(self.$('.intro'), 0.5, { autoAlpha: 0, display: 'none' })
      .to(self.$('.title'), 1, { autoAlpha: 0, display: 'none' })
      .to(self.$('.san-francisco'), 0.5, { autoAlpha: 1,
                                          onComplete: self.showMileage.bind(self) });

  },

  eavesdrop: function(){
    this.$el.on("panelsnap:finish", this.activate.bind(this));
    this.$el.on("panelsnap:deactivate", this.deactivate.bind(this));
    this.$('video').on("ended", this.postVideo.bind(this));
    this.$('video').on("timeupdate", this.updateMileage.bind(this));
  },

  showMileage: function() {
    var self = this;
    new TimelineMax()
      .to(self.$('.san-francisco'), 0.7 , { autoAlpha: 0, delay: 2, display: 'none' })
      .to(self.$('.mileage'), 0.5 , { autoAlpha: 1, onComplete: function(){
        self.$('video')[0].play();
      }});
  },

  updateMileage: function(e) {
    var $video = this.$('video')[0];
    var milesLeft = this.NUM_MILES - (($video.currentTime / $video.duration) * this.NUM_MILES);
    this.$('.miles-left').html(parseInt(milesLeft));
  },

  postVideo: function() {
    new TimelineMax()
      .to(self.$('.mileage'), 0.7, { autoAlpha: 0, delay: 0.5, display: 'none' })
      .to(self.$('.breckenridge'), 0.5, { autoAlpha: 1});
  },

  activate: function() {
    this.playIntro();
  },

  deactivate: function() {

  },

  initVideo: function(){
    this.$el.videoBG({
      mp4    : '/videos/migration/migration.mp4',
      webm   : '/videos/migration/migration.webm',
      ogv    : '/videos/migration/migration.ogg',
      poster : '/videos/migration/migration.jpg',
      scale  : true,
      zIndex : 0,
      autoPlay: false,
    });
    this.$('video')[0].pause();
  },

  playIntro: function(){
    var self = this;
    new TimelineMax()
      .to(self.$('.intro'), 0.5, { autoAlpha: 1 })
      .to(self.$('.play'), 0.5, { autoAlpha: 1 });

  },

});
module.exports.id ="glimpses/migration";

