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
  },

  // TODO: probably abstract this into a child of baseview... say GlimpseView
  activate: function() {
    var self = this;
    new TimelineMax()
      .to(self.$('h1'), 0.3, { autoAlpha: 1 })
      .to(self.$('.description'), 0.7, { autoAlpha: 1 })
      .to(self.$('.play'), 0.5, { autoAlpha: 1 });
  },

  // TODO: probably abstract this into a child of baseview... say GlimpseView
  play: function() {
    var self = this;
    new TimelineMax()
      .to(self.$('.absolute-center'), 0.3, { autoAlpha: 0 })
      .to(self.$('.overlay'), 0.5, { autoAlpha: 0 });
  },

  getTimeline: function(){
    var self = this;
    return (new TimelineMax()
      .append(TweenMax.from(this.$('.header'), 500, {marginTop: -10, autoAlpha: 0}))
      .append([
        TweenMax.to(this.$('.header'), 500, {marginTop: -10, autoAlpha: 0, delay: 500}),
        TweenMax.from(this.$('.note'), 500, {right: '-200%',rotationZ: 10, delay: 500})])
      .append([
        TweenMax.to(this.$('.note'), 500, {delay: 500, left: '-200%',rotationZ: -10}),
        TweenMax.to(this.$('.overlay'), 500, {autoAlpha: 0, delay: 500})
      ])
      );
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

