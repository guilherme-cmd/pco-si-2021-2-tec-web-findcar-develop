const webpage = require('../../src/controllers/webpage');

describe('test validation fields', () => {
  test('should return bad request', async () => {
    const request = {
      query: {
        brand: null
      }
    };
    const response = {
      json: (obj) => {
        return obj;
      }
    };
    expect(await webpage.findAdvertising(request, response)).toEqual({
      status: 400,
      message: 'Bad request'
    });
  });
});
