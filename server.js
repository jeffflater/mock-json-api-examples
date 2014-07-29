/**
 * Created by flaterje on 7/29/2014.
 */
var express = require('express'),
    http = require('http'),
    mock = require('mock-json-api');


var app = express();

app.set('port', process.env.PORT || 3000);// jshint ignore:line
app.use(express.static(path.join(__dirname, 'public')));// jshint ignore:line

var testMocks = require('./test/mocks/testMocks.js');

var mockapi = new mock({
    jsonStore: 'test/data/store.json',
    mockRoutes: testMocks.mocks
});

app.use(mock.registerRoutes);

var server = http.createServer(app);

server.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});