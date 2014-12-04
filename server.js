var express = require('express');
var path = require('path');
var products = require('./lib/products-handler');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public/')));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/api/products', products.getAllProducts);

var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('app listening on port', port);
});
