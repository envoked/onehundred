var mongoose = require('mongoose'),
    baucis = require('baucis');

module.exports = function () {
  // Baucis Resources
  baucis.rest({
    singular: 'glimpse',
  });


  return baucis();
};
