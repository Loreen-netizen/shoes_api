let request = require('supertest');
const app = require('../index.js');

describe("GET/api/shoes", async function() {
    it("should return shoe data as a JSON object", function(done) {
        request(app).get('/api/shoes', function(req, res) {
            res.status(200).json({ name: 'john' });
        });

        request(app)
            .get('/api/shoes')
            .expect('Content-Type', /json/)
            .expect('Content-Length', '16')
            .expect(200)
            .end(function(err, res) {
                if (err) throw err;
            });
    });

});