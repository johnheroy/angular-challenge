var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wirestorm');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('successfully connected to MongoDB');
});

module.exports = {
  getAllProducts: getAllProducts
};

var Product = mongoose.model('Product', {
  name: String,
  description: String,
  price: Number,
  pictureUrl: String,
  comments: [{ body: String, date: Date }]
});

function getAllProducts(req, res){
  Product.find({}, function(err, products){
    res.send(products);
  });
}
