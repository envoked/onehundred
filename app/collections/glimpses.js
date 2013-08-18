var Glimpse = require('../models/glimpse'),
    Base = require('./base');

module.exports = Base.extend({
  model: Glimpse,
  url: 'http://localhost:3030/api/v1/glimpses'
});
module.exports.id = 'Glimpses';
