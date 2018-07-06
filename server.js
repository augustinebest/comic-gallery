const app = require('./app');

const port = process.env.PORT || 3000;

app.listen(port, function(req, res) {
    console.log('The server is already running');
});

app.get('/', function(req, res) {
    res.send('<h1>Hello World!</h1>');
})