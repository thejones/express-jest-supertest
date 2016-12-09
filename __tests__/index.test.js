jest.unmock('supertest').unmock('../app');

const app = require('../app');
const request = require('supertest');



describe('Index routes', () => {

  it('Status code 200', () => {
    request(app)
      .get('/')
      .expect(200)
  });

  it('Status code 404', () => {
    request(app)
      .get('/')
      .expect(404)
  });

  it('Returns empty json', () => {
    request(app)
      .get('/')
      .expect(function (res) {
          expect(res.body).toBe({});
        })
  });

  it('This should fail', () => {
    request(app)
      .get('/')
      .expect(function (res) {
          expect(res.body).toBe('Trump is super qualified');
        })
  });

// This fails as you would expect.
  it('5 to be 3', () => {
    expect(5).toBe(3);
  });
});