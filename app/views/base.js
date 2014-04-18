var RendrView = require('rendr/shared/base/view');

// Create a base view, for adding common extensions to our
// application's views.
module.exports = RendrView.extend({
  tagName: 'section',

  deactivate: {
    //noop
  },

  activate: {
    //noop
  },

  CONSTANTS: {
    FADE_SPEED: 0.7,
  }
});


