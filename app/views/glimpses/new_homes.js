var BaseView = require('../base');
module.exports = BaseView.extend({
  tagName: 'section',
  className: 'new-homes glimpse',
  // This should be entry point in showcasing temporary homes: tipi, park city, airport, victoria
  postRender: function(){
    return true;
  },
});
module.exports.id ="glimpses/new_homes";
