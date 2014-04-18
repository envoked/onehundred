var BaseView = require('../base');
module.exports = BaseView.extend({
  tagName: 'section',
  className: 'new-friends glimpse',

  postRender: function(){
    return true;
  },
});
module.exports.id ="glimpses/new_friends";
