///<reference types='cypress'/>

describe('Test file upload', () => {

    beforeEach(() => {
        cy.visit('http://webdriveruniversity.com/');
        cy.get('#file-upload').invoke('removeAttr', 'target').click({ force: true });
    })


    it('file upload', () => {
        cy.fixture('test.png', 'base64').then((fileContent) => {
            cy.get('#myFile').attachFile(
                {
                    fileContent,
                    fileName: 'test.png',
                    fileType: 'image/png'
                },
                {
                    uploadType: 'input'
                }
            );
            cy.get('#submit-button').click()
        })
    })
})