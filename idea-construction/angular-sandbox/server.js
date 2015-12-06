(function IFEE() {
    'use strict';

    var connect = require('connect');
    var serveStatic = require('serve-static');

    console.log("development server has been started on port 8080");
    connect().use(serveStatic(__dirname)).listen(8080);
}());