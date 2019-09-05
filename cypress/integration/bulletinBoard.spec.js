/// <reference types="Cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  
    // https://on.cypress.io/interacting-with-elements
  
    it('tap to make new notes ', () => {



        for(let i = 0; i<20; i++){
            cy.get('#add').click()
            cy.wait(0);
        }


    })


    it('Create 5 notes and delete them ', () => {

        for(let i = 0; i<20; i++){
            cy.get('#add').click()
            cy.wait(0);
        }
        
        for(let i =0; i<20 ; i++){
            cy.get('.board').find('.note').eq(0).find('#remove').click({force: true});
        }
    })

    it('Create a note and edit it ', () => {


    const notes = ['hello andy', 'andy is amazing', 'andy is great', 'andy is too cool', 'andy is so handy'];



        // let noteID = 0;
        // notes.map((item)=>{
           
        //     cy.get('#add').click();
        //     cy.get('.board .note').find('#edit').click({force: true});
        //     cy.get('.board .note').find('textarea').type(item);
        //     cy.get('.board .note').find('#save').click();
        //     i++;
        // })
     



    })


 
  })
  