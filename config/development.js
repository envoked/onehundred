// Config settings for NODE_ENV=development

exports.config = {
  assets: {
    minify: false,
    cdn: {
      protocol: 'http',
      cnames: ['localhost'],
      pathPrefix: ''
    }
  },

  api: {
    'default': {
      host: 'localhost:30230/api/v1',
      protocol: 'http'
    },
    'travis-ci': {
      host: 'api.travis-ci.org',
      protocol: 'https'
    }
  },
};
