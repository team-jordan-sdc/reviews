const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/moodu');


/* SCHEMAS */
let reviewsSchema = mongoose.Schema({
    id: 'number',
    filmname: 'string',
    reviews: [
      {
        id: 'number',
        review: 'string',
        author: 'string',
        rating: 'number',
        source: 'string'
      }
    ]
  });


let productsSchema = mongoose.Schema({
  index: 'number',
  prodname: 'string',
  price: 'string',
  added: 'string',
  picture: 'string',
  about: 'string'
}
);

/* MODELS */
let Review = mongoose.model('Review', reviewsSchema);
let Product = mongoose.model('Product', productsSchema);

module.exports.Review = Review;
module.exports.Product = Product;


