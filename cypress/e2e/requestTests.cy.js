/// <reference types="cypress" />

describe('GET method test scenarios', () => {

    it('Email is not null for comment 1', () => {
        cy.request('GET','https://jsonplaceholder.typicode.com/posts/1/comments',).then((response) => {
        expect(response.body[0].email).not.null;
        }   
    )})
    it('Get body value from second post', () => {
        cy.request('GET','https://jsonplaceholder.typicode.com/posts',).then((response) => {
        expect(response.body[1].body).contains('blanditiis voluptate');
    })
})
    it('Check that user gets 100 posts', () => {
        cy.request('GET','https://jsonplaceholder.typicode.com/posts',).then((response) => {
            expect(response.body).to.have.length(100);
        }
    )})

    it('Check that photo 1 have an url', () => {
        cy.request('GET','https://jsonplaceholder.typicode.com/photos',).then((response) => {
            expect(response.body[0].url).not.null;
        })
})
    it('Check that user can see only 5000 photos in JSON response', () => {
         cy.request('GET','https://jsonplaceholder.typicode.com/photos',).then((response) => {
         expect(response.body).to.have.length(5000);
    })
})
})
