const chai = require('chai');
const request = require("request");
const should = chai.should();

describe(`${process.env.WEB_API_BASE_URL} get user by username`, () => {

    it('should return the user by username', (done) => {
        const options = {
            method: 'GET',
            url: `${process.env.WEB_API_BASE_URL}/users/test`,
            headers: {
                'User-Agent': 'test'
            }
        };
        request(options, (error, response, body) => {
            should.not.exist(error);
            user = JSON.parse(body);
            user.should.be.a('object');
            user.should.have.property('id');
            user.id.should.equal(383316);
            done();
        });
    });
});