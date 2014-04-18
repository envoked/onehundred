var BaseView = require('../base');
module.exports = BaseView.extend({
  tagName: 'section',
  className: 'wet-pow glimpse',

  postRender: function(){
    return true;
  },
});
module.exports.id ="glimpses/wet_pow";
