var BaseView = require('../base');

// All the Glimpses
var NostalgiaView = require('../glimpses/nostalgia');


module.exports = BaseView.extend({
  className: 'home_index_view',
  events:{
    'click .play': 'play'
  },

  postRender: function(){
    this.initScroll();
    this.startVideo();
  },

  initScroll: function(){
    var self = this;
    var controller = $.superscrollorama({
      playoutAnimations: true
    });

    controller.addTween('#nostalgia',
      TweenMax.from($('#nostalgia'), 0.5, {css:{opacity:0},
      onComplete: function() { self.playVideo();}}, 800)
    );

  },

  playVideo: function(){
    $('#nostalgia .videoBG').addClass('focused');
    $('#nostalgia video')[0].play();
  },

  startVideo: function(){
      $('#nostalgia').videoBG({
      mp4    : '/videos/nostalgia/nostalgia.mp4',
      webm   : '/videos/nostalgia/nostalgia.webm',
      ogv    : '/videos/nostalgia/nostalgia.ogg',
      poster : '/videos/nostalgia/nostalgia.jpg',
      scale  : true,
      zIndex : 0,
    });
    $('#nostalgia video')[0].pause();
  }
});
module.exports.id = 'home/index';
