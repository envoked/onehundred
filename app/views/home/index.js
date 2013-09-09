var BaseView = require('../base');

module.exports = BaseView.extend({
  className: 'home_index_view',
  events:{
    'click .play': 'play'
  },

  postRender: function(){
    this.$description = $('.description');
    this.$hundo = $('.one-hundred-days');
    this.$headerContainer = $('.header-container');
    this.$play= $('.play');

    this._typeTitle();
    this._startVideo();
  },

  _fadeTitle: function(){

  },

  play: function(e){
    var self = this;
    $('.videoBG').addClass('focused');
    this.$headerContainer.transition({opacity: 0.1},700,'easeInOutCubic', function(){
      self.$play.transition({opacity: 0.0},700,'easeInOutCubic');
      $('video')[0].play();
    });
  },

  _typeTitle: function(){
    var self = this;
    this.$('.object').typed({
      strings: ['Nostalgia'],
      typeSpeed: 100,
      typedCursor: false,
      callback: function(){
        self.$hundo.transition({opacity:0, 'margin-left': self.$hundo.width() * -1},1000,'easeInOutCubic', function(){
          self.$description.transition({opacity: 1},1000,'easeInOutCubic', function(){
            self.$play.transition({opacity:1});
          });
        });
      }
    });
  },

  _startVideo: function(){
    $('#videoMAN').videoBG({
      position:"fixed",
      zIndex : -1,
      mp4    : '/videos/nostalgia.mp4',
      webm   : '/videos/nostalgia.webm',
      ogv    : '/videos/nostalgia.ogg',
      poster : '/videos/nostalgia.jpg',
      opacity    : 1,
      fullscreen : true,
    });
    $('video')[0].pause();
  },



});
module.exports.id = 'home/index';
