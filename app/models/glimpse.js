var Base = require('./base');

module.exports = Base.extend({
  relUrl: '/glimpses/:id',
  idAttribute: '_id',

  defaults: {
    name: null,
    title: null,
    id: null,
  },

  getTemplateData: function() {
  }



});

module.exports.id = 'Glimpse';
