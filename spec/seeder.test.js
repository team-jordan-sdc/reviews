const mongoose = require('mongoose');
const db = require('../database/index.js');
const seed = require('../database/seeder.js').seed;

describe('Database seeder', () => {
  let reviews;
  let products;

  beforeAll(async () => {
    await seed();
    await db.Review.find().then(results => reviews = results);
    await db.Product.find().then(results => products = results);
  });

  test('should populate reviews collection with 100 documents', () => {
    expect(reviews.length).toBe(100);
  });

  test('should populate products  collection with 100 documents', () => {
    expect(products.length).toBe(100);
  });

  test('should return valid document by Film Name', async () => {
    const result = await db.Review.find({ "filmname": reviews[0].filmname });
    expect(result).toBeTruthy();
  });

  test('should return valid Prod document by Product Name', async () => {
    const result = await db.Product.find({ "prodname": products[0].prodname });
    expect(result).toBeTruthy();
  });

  test('should return valid document by ID', async () => {

    const result = await db.Review.findById(reviews[0]._id);
    expect(result).toBeTruthy();
  });

  test('should create review documents with the correct properties', () => {
    expect(reviews[0].filmname).toBeTruthy();
    expect(reviews[0].length).toBeTruthy();
    expect(reviews[0].released).toBeTruthy();
    expect(reviews[0].rating).toBeTruthy();
    expect(reviews[0].studio).toBeTruthy();
    expect(reviews[0].language).toBeTruthy();
    expect(reviews[0].reviews[0].review).toBeTruthy();
    expect(reviews[0].reviews[0].rating).toBeTruthy();
    expect(reviews[0].reviews[0].author).toBeTruthy();

  });

  test('should create product documents with the correct properties', () => {
    expect(products[0].prodname).toBeTruthy();
    expect(products[0].price).toBeTruthy();
    expect(products[0].about).toBeTruthy();

  });

  afterAll(async () => {
    // await db.Review.collection.drop();
    console.log('Test finished');
  })

});
