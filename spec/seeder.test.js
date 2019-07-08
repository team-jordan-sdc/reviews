const mongoose = require('mongoose');
const db = require('../database/index.js');
const seed = require('../database/seeder.js').seed;

describe('Database seeder', () => {
  let reviews;

  beforeAll(async () => {
    await seed();
    await db.Review.find().then(results => reviews = results);
  });

  test('should populate reviews collection with 100 documents', () => {
    expect(reviews.length).toBe(100);
  });

test("should return valid document by Film Name", async () => {
  ( { "name.last": "Hopper" } )
    const result = await db.Review.find({"filmname" : reviews[0].filmname});
    expect(result).toBeTruthy();
});

  test("should return valid document by ID", async () => {

        const result = await db.Review.findById(reviews[0]._id);
        expect(result).toBeTruthy();
  });

  test('should create review documents with the correct properties', () => {
    expect(reviews[0].filmname).toBeTruthy();
    expect(reviews[0].reviews[0].review).toBeTruthy();
    expect(reviews[0].reviews[0].rating).toBeTruthy();
    expect(reviews[0].reviews[0].author).toBeTruthy();
   });

  afterAll(async () => {
    await db.Review.collection.drop();
     console.log('Reviews collection dropped')
  })

})