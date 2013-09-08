var BaseView = require('../base');

module.exports = BaseView.extend({
  className: 'home_index_view',

  postRender: function(){
    this._typeTitle();
    this._startVideo();
  },

  _fadeTitle: function(){

  },

  _typeTitle: function(){
    var self = this;
    this.$('.object').typed({
      strings: ['Nostalgia'],
      typeSpeed: 100,
      typedCursor: false,
      callback: function(){
        $('.videoBG').addClass('focused');
        $('video')[0].play();
        var $hundo = $('.one-hundred-days');
        $hundo.transition({opacity:0, 'margin-left': $hundo.width() * -1},500,'easeInOutCubic');
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
