var BaseView = require('../base');

module.exports = BaseView.extend({
  className: 'home_index_view',

  postRender: function(){
    $('#videoMAN').videoBG({
      zIndex     : -1,
      mp4        : '/videos/test.mp4',
      ogv        : '/videos/test.ogv',
      webm       : '/videos/test.webm',
      opacity    : 0.7,
      fullscreen : true,
      loop       : true,
      autoplay   : true,
    });
  }
});
module.exports.id = 'home/index';
