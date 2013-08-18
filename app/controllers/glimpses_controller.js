module.exports = {
  index: function(params, callback){
    var spec = {
      collection: {collection: 'Glimpses', params: params}
    };
    this.app.fetch(spec, function(err, result) {
      callback(err, result);
    });
  },

  show: function(params, callback){
    var spec = {
      model: { model: 'Glimpse', params: params },
    };
    this.app.fetch(spec, function(err, result) {
      callback(err, result);
    });
  }
};
