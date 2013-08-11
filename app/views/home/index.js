var BaseView = require('../base');

module.exports = BaseView.extend({
  className: 'home_index_view',

  postRender: function(){
  	console.log("Hello");
  }
});
module.exports.id = 'home/index';
