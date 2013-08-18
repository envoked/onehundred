module.exports = function(match) {
  match(''       , 'home#index');
  match('glimpses' , 'glimpses#index');
  match('glimpses/:id' , 'glimpses#show');
};
