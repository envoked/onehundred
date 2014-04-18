var BaseView = require('../base');
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
    this.tease();
  },

  deactivate: function() {
    this.seduce().reverse();
    this.tease().reverse();
  },

  // TODO: probably abstract this into a child of baseview... say GlimpseView
  play: function() {
    this.seduce();
  },

  tease: function() {
    var self = this;
    var tl = new TimelineMax()
      .fromTo(self.$('h1'), 0.3, { autoAlpha: 0 }, { autoAlpha: 1 })
      .fromTo(self.$('.description'), 0.7, { autoAlpha: 0 }, { autoAlpha: 1 })
      .fromTo(self.$('.play'), 0.5,{ autoAlpha: 0 }, { autoAlpha: 1 });
    return tl;
  },

  seduce: function() {
    var self = this;
    var tl =new TimelineMax()
      .fromTo(self.$('.absolute-center'), 0.3, { autoAlpha: 1}, { autoAlpha: 0 })
      .fromTo(self.$('.overlay'), 0.5, { autoAlpha: 0.75}, { autoAlpha: 0 });
    return tl;
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

