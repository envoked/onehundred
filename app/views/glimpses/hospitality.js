var BaseView = require('../base');
module.exports = BaseView.extend({
  tagName: 'section',
  className: 'hospitality glimpse',

  postRender: function(){
    return true;
  },
});
module.exports.id ="glimpses/hospitality";
