var Base = require('./base');

module.exports = Base.extend({
  url: 'http://localhost:3030/api/v1/glimpses/:id',
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
