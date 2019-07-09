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


async function getReviewsforFilm(filmname)  {

  try {

    let query = {"filmname": filmname}

    return await Review.find(query);

    // console.log(`res => ${JSON.stringify(res)}`);

  } catch (err) {
    console.log(err.stack);
  }

};

module.exports.getReviewsforFilm = getReviewsforFilm;
module.exports.Review = Review;
module.exports.Product = Product;


