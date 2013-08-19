var Glimpse = require('../models/glimpse'),
    Base = require('./base');

module.exports = Base.extend({
  model: Glimpse,
  url: '/moments',
});
module.exports.id = 'Glimpses';
