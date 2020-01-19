const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../app');

chai.use(chaiHttp);

let token;

describe('/api/musics tests', () => {
	before((done) => {
		chai.request(server)
			.post('/login')
			.send({username: 'huseyintamer', password: '12345678'})
			.end((err, res) => {
				token = res.body.token;
				done();
			});
	});
	describe('/GET musics', () => {
		it('it should GET all the musics', (done) => {
			chai.request(server)
				.get('/api/musics')
				.set('x-access-token', token)
				.end((err, res) => {
					res.should.have.status(200);
					done();
				});
		})
	});

});