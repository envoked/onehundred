var BaseView = require('../base');
module.exports = BaseView.extend({
  tagName: 'section',
  className: 'girlfriends glimpse',

  postRender: function(){
    return true;
  },
});
module.exports.id ="glimpses/girlfriends";
