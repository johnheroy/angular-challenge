var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wirestorm');
var mockData = require('./mock-data.json');

var Product = mongoose.model('Product', {
  name: String,
  description: String,
  price: Number,
  pictureUrl: String,
  comments: [{ body: String, date: Date }]
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('successfully connected to MongoDB and ready to bootstrap!');

  mockData.products.forEach(function(product){
    Product.create(product, function(err){
      if (err) throw err;
    });
  });
});
