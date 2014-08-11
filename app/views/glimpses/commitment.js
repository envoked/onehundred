var BaseView = require('../glimpse');
module.exports = BaseView.extend({
  className: 'glimpse commitment',

  events: {
    'click .play': 'play'
  },

  postRender: function(){
    this.initMap();
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

  initMap: function(){
    var mapOptions = {
      zoom: 20,
      center: new google.maps.LatLng(39.481985, -106.059299),
      mapTypeId: google.maps.MapTypeId.SATELLITE,
      zoomControl: false,
      scaleControl: false,
      scrollwheel: false,
      disableDoubleClickZoom: true,
    };

    var panoramaOptions = {
      position: new google.maps.LatLng(39.481985, -106.059299)
    };

    var map = new google.maps.Map(this.$('.map')[0], mapOptions);
    var panorama = map.getStreetView();
    panorama.setPosition(new google.maps.LatLng(39.481985, -106.059299));
    panorama.setVisible(true);
  }

});
module.exports.id ="glimpses/commitment";

