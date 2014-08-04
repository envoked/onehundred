var BaseView = require('../base');
module.exports = BaseView.extend({
  className: 'glimpse daydream',

  postRender: function(){
    this.initVideo();
    this.eavesdrop();
    return true;
  },
});
module.exports.id ="glimpses/daydream";

