var BaseView = require('../base');
module.exports = BaseView.extend({
  tagName: 'section',
  className: 'no-pow glimpse',

  postRender: function(){
    return true;
  },
});
module.exports.id ="glimpses/no_pow";
