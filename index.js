'use strict';

var http = require('http')
	,express = require('express')
	,path = require('path')
   ,app = express()
   ,server = require('http').createServer(app);

app.set('port', process.env.PORT || 7000);
app.use(express.static(path.join(__dirname, '')));
server.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;
