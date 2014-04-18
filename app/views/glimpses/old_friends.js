var BaseView = require('../base');
module.exports = BaseView.extend({
  tagName: 'section',
  className: 'old-friends glimpse',

  postRender: function(){
    return true;
  },
});
module.exports.id ="glimpses/old_friends";
