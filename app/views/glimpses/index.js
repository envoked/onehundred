var BaseView = require('../base');

module.exports = BaseView.extend({
  className: 'glimpses_index_view',

  getTemplateData: function() {
    var data = BaseView.prototype.getTemplateData.call(this);
    return data;
  }
});
module.exports.id = 'glimpses/index';
