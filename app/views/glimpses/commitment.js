var BaseView = require('../base');
module.exports = BaseView.extend({
  className: 'glimpse commitment',

  postRender: function(){
    this.initMap();
    window.scroller.pin(
      this.$el,
      1200,
      {
        anim: this.getTimeline()
      }
    );
    return true;
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
        TweenMax.from(this.$('.map'), 500, {autoAlpha: 0, delay: 500})
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

