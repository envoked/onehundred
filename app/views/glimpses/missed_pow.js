var BaseView = require('../base');
module.exports = BaseView.extend({
  tagName: 'section',
  className: 'missed-pow glimpse',

  postRender: function(){
    return true;
  },
});
module.exports.id ="glimpses/missed_pow";
