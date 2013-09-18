var Base = require('./base');

module.exports = Base.extend({
  url: '/glimpses/:id',
  idAttribute: '_id',

  defaults: {
    title: null,
    description: null,
    created_at: null,
    animations: [],
  },
});

module.exports.id = 'Glimpse';
