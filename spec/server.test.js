const request = require('supertest');


describe('Express server', () => {


    test('should send valid response to get request to /api/reviews', async () => {
     const response = await request('http://127.0.0.1:3001')
    .get('/api/reviews?filmname=The Shawshank Redemption');

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0]).toHaveProperty("reviews");
    expect(response.body[0]).toHaveProperty("filmname");
  });


  test('should send valid response to get request to /api/products', async () => {
    const response = await request('http://127.0.0.1:3001')
   .get('/api/products');

   expect(response.statusCode).toBe(200);
   expect(response.body.length).toBe(100);
   expect(response.body[0]).toHaveProperty("prodname");
   expect(response.body[0]).toHaveProperty("price");
 });

});