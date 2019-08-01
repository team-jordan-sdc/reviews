const request = require('supertest');
const {mockData} = require('./mockData.js');

describe('Express server', () => {


  test('should send valid response to get request to /api/reviews', async () => {
    const response =
      await request('http://127.0.0.1:3001')
        .get('/api/reviews?id=1');
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0]).toHaveProperty('reviews');
    expect(response.body[0]).toHaveProperty('filmname');

  });

  test('should save new record with index=201 on POST request to /api/reviews', async () => {
    const response =
      await request('http://127.0.0.1:3001')
          .post('/api/reviews')
          .set('Accept', 'application/json')
          .send(mockData);

    expect(response.statusCode).toBe(201);
    expect(response.body[0].index).toBe(mockData.index);
    expect(response.body[0].filmname).toBe(mockData.filmname);
  });

  test('should update review with id=1 for index=201 on PUT request to /api/reviews', async () => {

    const updateObject = {
      updateQuery: {index: 201, 'reviews.id': 1},
      updateValues: {$set: {'reviews.$.review': 'It was amazing'}}
    };

    const response =
      await request('http://127.0.0.1:3001')
          .put('/api/reviews')
          .set('Accept', 'application/json')
          .send(updateObject);

    expect(response.statusCode).toBe(201);
    expect(response.body.index).toBe(201);
    expect(response.body.reviews[0].review).toBe('It was amazing');
  });

  test('should add new review with id=2 for index=201 on PUT request to /api/reviews', async () => {

    const newReview = {
      'id': 2,
      'review': 'Crazy one',
      'author': 'Tarzan',
      'rating': 89,
      'source': 'ou'
    };

    const updateObject = {
      updateQuery: {index: 201},
      updateValues: {
        $push: {
          reviews: newReview
          }
        }
      };

    const response =
      await request('http://127.0.0.1:3001')
          .put('/api/reviews')
          .set('Accept', 'application/json')
          .send(updateObject);

    expect(response.statusCode).toBe(201);
    expect(response.body.index).toBe(201);
    expect(response.body.reviews[1].review).toBe('Crazy one');
  });

  test('should remove review with id=2 for index=201 on PUT request to /api/reviews',  async () => {

    const deleteReview = {
      'id': 2,
    };

    const updateObject = {
      updateQuery: {index: 201},
      updateValues: {
        $pull: {
          reviews: deleteReview
          }
        }
      };

    const response =
      await request('http://127.0.0.1:3001')
          .put('/api/reviews')
          .set('Accept', 'application/json')
          .send(updateObject);

    expect(response.statusCode).toBe(201);
    expect(response.body.index).toBe(201);
    expect(response.body.reviews.length).toBe(1);
  });

  test('should update rating=40 for index=201 on PUT request to /api/reviews', async () => {

    const updateObject = {
      updateQuery: {index: 201},
      updateValues: {$set: {rating: 40}}
    };

    const response =
      await request('http://127.0.0.1:3001')
          .put('/api/reviews')
          .set('Accept', 'application/json')
          .send(updateObject);

    expect(response.statusCode).toBe(201);
    expect(response.body.index).toBe(201);
    expect(response.body.rating).toBe(40);
  });

  test('should delete record for index=201 on DELETE request to /api/reviews', async () => {

    const deleteObject = {
      deleteQuery: {index: 201},
    };

    const response =
      await request('http://127.0.0.1:3001')
          .delete('/api/reviews/?id=201');

    expect(response.statusCode).toBe(200);
    expect(response.body.index).toBe(201);
  });

  test('should send valid response to get request to /api/products', async (done) => {
    const response = await request('http://127.0.0.1:3001')
      .get('/api/products');

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(100);
    expect(response.body[0]).toHaveProperty('prodname');
    expect(response.body[0]).toHaveProperty('price');
    done();
  });

});

