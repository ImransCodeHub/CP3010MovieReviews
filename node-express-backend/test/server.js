import { expect } from 'chai';
import request from 'request';

describe('Movies API /api/movies', () => {
  it('should return status code 200 for /api/movies route', (done) => {
    request.get('http://localhost:8000/api/movies', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});
