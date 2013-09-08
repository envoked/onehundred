var Glimpse = require('../models/glimpse'),
    Base = require('./base');

module.exports = Base.extend({
  model: Glimpse,
  url: '/glimpses',
});
module.exports.id = 'Glimpses';
