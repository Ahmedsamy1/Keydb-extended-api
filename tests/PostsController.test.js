const request = require('supertest');
const app = require('../app');

it('GET /api/posts --> json error tags parameter', () => {
  return request(app)
    .get('/api/posts')
    .expect('Content-Type', /json/)
    .expect(400)
    .then((response) => {
      expect(response.body).toEqual({ error: 'Tags parameter is required' });
    });
});

it('GET /api/posts?tags=science&sortBy=wrong --> json error sortBy parameter', () => {
  return request(app)
    .get('/api/posts?tags=science&sortBy=wrong')
    .expect('Content-Type', /json/)
    .expect(400)
    .then((response) => {
      expect(response.body).toEqual({'error':'sortBy parameter is invalid'});
    });
});

it('GET /api/posts?tags=science&sortBy=0 --> json error sortBy parameter', () => {
  return request(app)
    .get('/api/posts?tags=science&sortBy=0')
    .expect('Content-Type', /json/)
    .expect(400)
    .then((response) => {
      expect(response.body).toEqual({'error':'sortBy parameter is invalid'});
    });
});

it('GET /api/posts?tags=science&direction=wrong --> json error direction parameter', () => {
  return request(app)
    .get('/api/posts?tags=science&direction=wrong')
    .expect('Content-Type', /json/)
    .expect(400)
    .then((response) => {
      expect(response.body).toEqual({"error":"direction parameter is invalid"});
    });
});

it('GET /api/posts?tags=science&direction=0 --> json error direction parameter', () => {
  return request(app)
    .get('/api/posts?tags=science&direction=0')
    .expect('Content-Type', /json/)
    .expect(400)
    .then((response) => {
      expect(response.body).toEqual({"error":"direction parameter is invalid"});
    });
});

it('GET /api/posts?tags=science&sortBy=wrong&direction=asc --> json error sortBy parameter', () => {
  return request(app)
    .get('/api/posts?tags=science&sortBy=wrong&direction=asc')
    .expect('Content-Type', /json/)
    .expect(400)
    .then((response) => {
      expect(response.body).toEqual({'error':'sortBy parameter is invalid'});
    });
});

it('GET /api/posts?tags=science&sortBy=wrong&direction=desc --> json error sortBy parameter', () => {
  return request(app)
    .get('/api/posts?tags=science&sortBy=wrong&direction=desc')
    .expect('Content-Type', /json/)
    .expect(400)
    .then((response) => {
      expect(response.body).toEqual({'error':'sortBy parameter is invalid'});
    });
});

it('GET /api/posts?tags=science&sortBy=0&direction=asc --> json error sortBy parameter', () => {
  return request(app)
    .get('/api/posts?tags=science&sortBy=0&direction=asc')
    .expect('Content-Type', /json/)
    .expect(400)
    .then((response) => {
      expect(response.body).toEqual({'error':'sortBy parameter is invalid'});
    });
});

it('GET /api/posts?tags=science&sortBy=0&direction=desc --> json error sortBy parameter', () => {
  return request(app)
    .get('/api/posts?tags=science&sortBy=0&direction=desc')
    .expect('Content-Type', /json/)
    .expect(400)
    .then((response) => {
      expect(response.body).toEqual({'error':'sortBy parameter is invalid'});
    });
});

it('GET /api/posts?tags=science&sortBy=id&direction=wrong --> json error direction parameter', () => {
  return request(app)
    .get('/api/posts?tags=science&sortBy=id&direction=wrong')
    .expect('Content-Type', /json/)
    .expect(400)
    .then((response) => {
      expect(response.body).toEqual({"error":"direction parameter is invalid"});
    });
});

it('GET /api/posts?tags=science&sortBy=id&direction=0 --> json error direction parameter', () => {
  return request(app)
    .get('/api/posts?tags=science&sortBy=id&direction=0')
    .expect('Content-Type', /json/)
    .expect(400)
    .then((response) => {
      expect(response.body).toEqual({"error":"direction parameter is invalid"});
    });
});

it('GET /api/posts?tags=science&sortBy=reads&direction=wrong --> json error direction parameter', () => {
  return request(app)
    .get('/api/posts?tags=science&sortBy=reads&direction=wrong')
    .expect('Content-Type', /json/)
    .expect(400)
    .then((response) => {
      expect(response.body).toEqual({"error":"direction parameter is invalid"});
    });
});

it('GET /api/posts?tags=science&sortBy=reads&direction=0 --> json error direction parameter', () => {
  return request(app)
    .get('/api/posts?tags=science&sortBy=reads&direction=0')
    .expect('Content-Type', /json/)
    .expect(400)
    .then((response) => {
      expect(response.body).toEqual({"error":"direction parameter is invalid"});
    });
});

it('GET /api/posts?tags=science&sortBy=likes&direction=wrong --> json error direction parameter', () => {
  return request(app)
    .get('/api/posts?tags=science&sortBy=likes&direction=wrong')
    .expect('Content-Type', /json/)
    .expect(400)
    .then((response) => {
      expect(response.body).toEqual({"error":"direction parameter is invalid"});
    });
});

it('GET /api/posts?tags=science&sortBy=likes&direction=0 --> json error direction parameter', () => {
  return request(app)
    .get('/api/posts?tags=science&sortBy=likes&direction=0')
    .expect('Content-Type', /json/)
    .expect(400)
    .then((response) => {
      expect(response.body).toEqual({"error":"direction parameter is invalid"});
    });
});

it('GET /api/posts?tags=science&sortBy=popularity&direction=wrong --> json error direction parameter', () => {
  return request(app)
    .get('/api/posts?tags=science&sortBy=popularity&direction=wrong')
    .expect('Content-Type', /json/)
    .expect(400)
    .then((response) => {
      expect(response.body).toEqual({"error":"direction parameter is invalid"});
    });
});

it('GET /api/posts?tags=science&sortBy=popularity&direction=0 --> json error direction parameter', () => {
  return request(app)
    .get('/api/posts?tags=science&sortBy=popularity&direction=0')
    .expect('Content-Type', /json/)
    .expect(400)
    .then((response) => {
      expect(response.body).toEqual({"error":"direction parameter is invalid"});
    });
});


it('GET /api/posts?tags=science --> json with success code', () => {
  return request(app)
    .get('/api/posts?tags=science')
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(typeof(response.body)).toEqual(typeof(JSON));
    });
});

it('GET /api/posts?tags=science&sortBy=id --> json with success code', () => {
  return request(app)
    .get('/api/posts?tags=science&sortBy=id')
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(typeof(response.body)).toEqual(typeof(JSON));
    });
});

it('GET /api/posts?tags=science&sortBy=reads --> json with success code', () => {
  return request(app)
    .get('/api/posts?tags=science&sortBy=reads')
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(typeof(response.body)).toEqual(typeof(JSON));
    });
});

it('GET /api/posts?tags=science&sortBy=likes --> json with success code', () => {
  return request(app)
    .get('/api/posts?tags=science&sortBy=likes')
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(typeof(response.body)).toEqual(typeof(JSON));
    });
});

it('GET /api/posts?tags=science&sortBy=popularity --> json with success code', () => {
  return request(app)
    .get('/api/posts?tags=science&sortBy=popularity')
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(typeof(response.body)).toEqual(typeof(JSON));
    });
});

it('GET /api/posts?tags=science&sortBy=id&direction=asc --> json with success code', () => {
  return request(app)
    .get('/api/posts?tags=science&sortBy=id&direction=asc')
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(typeof(response.body)).toEqual(typeof(JSON));
    });
});

it('GET /api/posts?tags=science&sortBy=id&direction=desc --> json with success code', () => {
  return request(app)
    .get('/api/posts?tags=science&sortBy=id&direction=desc')
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(typeof(response.body)).toEqual(typeof(JSON));
    });
});

it('GET /api/posts?tags=science&sortBy=reads&direction=asc --> json with success code', () => {
  return request(app)
    .get('/api/posts?tags=science&sortBy=reads&direction=asc')
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(typeof(response.body)).toEqual(typeof(JSON));
    });
});

it('GET /api/posts?tags=science&sortBy=reads&direction=desc --> json with success code', () => {
  return request(app)
    .get('/api/posts?tags=science&sortBy=reads&direction=desc')
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(typeof(response.body)).toEqual(typeof(JSON));
    });
});

it('GET /api/posts?tags=science&sortBy=likes&direction=asc --> json with success code', () => {
  return request(app)
    .get('/api/posts?tags=science&sortBy=likes&direction=asc')
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(typeof(response.body)).toEqual(typeof(JSON));
    });
});

it('GET /api/posts?tags=science&sortBy=likes&direction=desc --> json with success code', () => {
  return request(app)
    .get('/api/posts?tags=science&sortBy=likes&direction=desc')
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(typeof(response.body)).toEqual(typeof(JSON));
    });
});

it('GET /api/posts?tags=science&sortBy=popularity&direction=asc --> json with success code', () => {
  return request(app)
    .get('/api/posts?tags=science&sortBy=popularity&direction=asc')
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(typeof(response.body)).toEqual(typeof(JSON));
    });
});

it('GET /api/posts?tags=science&sortBy=popularity&direction=desc --> json with success code', () => {
  return request(app)
    .get('/api/posts?tags=science&sortBy=popularity&direction=desc')
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(typeof(response.body)).toEqual(typeof(JSON));
    });
});