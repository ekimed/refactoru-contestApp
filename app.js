var express = require('express');
var app = express();
var bodyParser = require('body-parser')
// var data = require(__dirname+'/models/submissionData.js');
var form = require(__dirname+'/controller/formController.js');

app.use(bodyParser());

app.use(express.static(__dirname+'/public'));

app.set('view engine', 'jade');
app.set('views', __dirname + '/views')

app.get('/', form.form);

app.post('/', form.post);

app.get('/display', form.displaySubmitted);

var server = app.listen(7944, function() {
	console.log('Express server listening on port ' + server.address().port);
});