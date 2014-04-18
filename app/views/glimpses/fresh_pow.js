var BaseView = require('../base');
module.exports = BaseView.extend({
  tagName: 'section',
  className: 'fresh-pow glimpse',

  postRender: function(){
    return true;
  },
});
module.exports.id ="glimpses/fresh_pow";
