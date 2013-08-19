var Base = require('./base');

module.exports = Base.extend({
  url: '/glimpses/:id',
  idAttribute: '_id',

  defaults: {
    name: null,
    title: null,
    id: null,
  },
});

module.exports.id = 'Glimpse';
