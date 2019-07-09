

describe('Express server', () => {

  test('should send valid response to get request to /api/reviews', async () => {
    const response = await request('http://127.0.0.1:3001')
      .get('/api/reviews')
      .send({
        filmname:  "The Shawshank Redemption"
      });
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0]).toHaveProperty("reviews");
    expect(response.body[0]).toHaveProperty("filmname");
  });
})

