var BaseView = require('../base');

module.exports = BaseView.extend({
  className: 'glimpses_show_view',

  getTemplateData: function() {
    var data = BaseView.prototype.getTemplateData.call(this);
    return data;
  },

  postRender: function() {
    $('h1').fadeOut();
  }
});
module.exports.id = 'glimpses/show';
