var express = require('express');
var exphbs = require('express-handlebars');
var routes = require('./routes/index');
var helpers = require('./lib/helpers');

var app = express();
app.set('port', process.env.PORT || 1000);

var hbs = exphbs.create({
    defaultLayout: 'main',
    helpers      : helpers,
    partialsDir: [
        'views/partials/'
    ],
});
app.engine('handlebars', hbs.engine);/*指明了默认布局*/
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/static'));
app.use('/', routes);

app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.');
});