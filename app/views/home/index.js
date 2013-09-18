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
  },

  initScroll: function(){
    var self = this;
    var controller = $.superscrollorama({
      playoutAnimations: true
    });

    controller.addTween('#nostalgia',
      TweenMax.from($('#nostalgia'), 0.5, {css:{opacity:0},
      onComplete: function() { }}, 800)
    );
  },
});
module.exports.id = 'home/index';
