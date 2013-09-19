var BaseView = require('../base');
module.exports = BaseView.extend({
  className: 'glimpse nostalgia',

  postInitialize: function(){
    var Model = require('../../models/' + this.options.modelid);
    this.model = new Model();
  },

  postRender: function(){
    console.log(this.model.id);
  },
});
module.exports.id ="glimpses/nostalgia";

