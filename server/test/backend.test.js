const {expect} = require('chai');
const supertest = require('supertest');
const backendApp = require('../backend-app');

describe('Backend App', () => {
    it('should return a message from GET /', () => {
        return supertest(backendApp)
            .get('/apps')
            .expect(200)
            .expect('Content-Type', /json/)
            .then(res => {
                expect(res.body).to.be.an('array');
                expect(res.body).to.have.lengthOf.at.least(1);
                const book = res.body[0];
                expect(book).to.include.all.keys(
                    'App', 'Catagory', 'Rating', 'Review', 'Size', 'Install', 'Type', 'Content'
                    ,'Content Rating', 'Genre', 'Last Updated', 'Current Ver', 'Android Ver'
                )
            });
    })
    it('should return ')
})