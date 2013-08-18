var Glimpse = require('../models/glimpse'),
    Base = require('./base');

module.exports = Base.extend({
  model: Glimpse,
  relUrl: '/glimpses',
});
module.exports.id = 'Glimpses';
