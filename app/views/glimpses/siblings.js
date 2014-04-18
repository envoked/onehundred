var BaseView = require('../base');
module.exports = BaseView.extend({
  tagName: 'section',
  className: 'siblings glimpse',

  postRender: function(){
    return true;
  },
});
module.exports.id ="glimpses/siblings";
