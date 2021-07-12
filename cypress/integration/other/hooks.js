///<reference types='cypress'/>

beforeEach(() => {
    // root-level hook
    // runs before every test
})

describe('Hooks', () => {
    before(() => {
        cy.log('runs once before all tests in the block');
        cy.log('usual test  text');
    })

    beforeEach(() => {
        cy.log('runs before each test in the block');
        cy.log('usual test  text');
    })

    afterEach(() => {
        cy.log('runs after each test in the block');
        cy.log('usual test  text');
    })

    after(() => {
        cy.log('runs once after all tests in the block');
        cy.log('usual test  text');
    })

    it('test 1', () => {
        cy.log('test text 1')
    })

    it('test 1', () => {
        cy.log('test text 2')
    })
})