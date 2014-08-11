var BaseView = require('../glimpse');
module.exports = BaseView.extend({
  className: 'glimpse daydream',

  postRender: function(){
    return true;
  },
});
module.exports.id ="glimpses/daydream";

