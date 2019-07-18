const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/moodu');


/* SCHEMAS */
const reviewsSchema = new mongoose.Schema({
  index: 'number',
  filmname: 'string',
  length: 'number',
  released: 'string',
  rating: 'number',
  studio: 'string',
  language: 'string',
  uhd: 'string',
  hdx: 'string',
  sd: 'string',
  cc: 'string',
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

const  productsSchema = new mongoose.Schema({
  id: 'number',
  prodname: 'string',
  price: 'number',
  picture: 'string',
  about: 'string'
}
);


/* MODELS */
const  Review = mongoose.model('Review', reviewsSchema);
const  Product = mongoose.model('Product', productsSchema);



async function getReviewsforFilm(index)  {

  try {

    let query = {index: index}

    return await Review.find(query);


  } catch (err) {
    console.log(err.stack);
  }

}


async function getProduct()  {

  try {
    return await Product.find();


  } catch (err) {
    console.log(err.stack);
  }

}



module.exports.Review = Review;
module.exports.Product = Product;
module.exports.getReviewsforFilm = getReviewsforFilm;
module.exports.getProduct = getProduct;


