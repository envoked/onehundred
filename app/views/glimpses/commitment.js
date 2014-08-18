var BaseView = require('../glimpse');

module.exports = BaseView.extend({
  className: 'glimpse commitment',

  events: {
    'click .reality': 'play'
  },

  play: function() {
    this.$el.toggleClass('open');
  },

  postRender: function(){
    // this.initMap();
    this.eavesdrop();

    return true;
  },

  eavesdrop: function() {
    this.$el.on("panelsnap:finish", this.activate.bind(this));
    this.$el.on("panelsnap:deactivate", this.deactivate.bind(this));
  },

  // TODO: probably abstract this into a child of baseview... say GlimpseView
  activate: function() {
    var $overlay = this.$('.overlay').hide();
  },

  deactivate: function() {
  },

});
module.exports.id ="glimpses/commitment";

