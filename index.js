var express = require('express'),
    mongoose = require('mongoose'),
    rendr = require('rendr'),
    env = require('./server/lib/env'),
    mw = require('./server/middleware'),
    app,
    server;

app = express();

/**
 * Initialize Express middleware stack.
 */
function initMiddleware() {
  app.use(express.compress());
  app.use(express.static(__dirname + '/public'));
  app.use(express.logger());
  app.use(express.bodyParser());

  /**
   * Rendr routes are attached with `app.get()`, which adds them to the
   * `app.router` middleware.
   */
  app.use(app.router);
  app.use('/api/v1', mw.api());


  /**
   * Error handler goes last.
   */
  app.use(mw.errorHandler());
}

/**
 * Initialize our Rendr server.
 *
 * We can pass inject various modules and options here to override
 * default behavior:
 * - errorHandler
 * - notFoundHandler
 * - appData
 */
function initServer() {
  var options = {
    errorHandler: mw.errorHandler(),
    dataAdapter: null,
    appData: env.current.rendrApp
  };
  server = rendr.createServer(app, options);
}

/**
 * Start the Express server.
 */
function start() {
  var port = process.env.PORT || 3030;
  app.listen(port);
  console.log("server pid %s listening on port %s in %s mode",
    process.pid,
    port,
    app.settings.env);
}


function initDB(){
  mongoose.connect('mongodb://localhost/the-pursuit');
  var Glimpse = new mongoose.Schema({ name: String, title: String });
  mongoose.model('glimpse', Glimpse);
}


/**
 * Here we actually initialize everything and start the Express server.
 *
 * We have to add the middleware before we initialize the server, otherwise
 * the 404 handler gets too greedy, and intercepts i.e. static assets.
 */
initDB();
initMiddleware();
initServer();
// Only start server if this script is executed, or wrapped by pm2
// not if it's require()'d

if (process.env.PM2 || require.main === module) {
  start();
}

exports.app = app;
