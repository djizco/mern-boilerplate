import express from 'express';
import request from 'supertest';
import routes from '.';

describe('The Server', () => {
  const app = express();
  app.use('/', routes);

  test('serves as an example endpoint', () => {
    request(app)
      .get('/api/tags')
      .expect(200)
      .expect(response => expect(response.body).to.include('Node'));
  });

  test('returns HTML on an unknown endpoint', () => {
    request(app)
      .get('/*')
      .expect(response => expect(response.header['content-type']).to.equal('text/html; charset=UTF-8'));
  });
});
