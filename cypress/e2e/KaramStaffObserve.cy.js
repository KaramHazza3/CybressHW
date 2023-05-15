describe('Staff Observe Page', ()=>{

    const username = Cypress.env('username');
    const password = Cypress.env('password');

    beforeEach(()=>{
        cy.visit('/');
        cy.get('form[action="/login/"]').should('exist');
        cy.get('input[name="username"]').should('exist').type(username);
        cy.get('input[name="password"]').should('exist').type(password);
        cy.get('select[name="login_as"]').should('exist').select('staff');
        cy.get('select[name="login_as"]').find('option').should(($option) => {
            expect($option).to.have.length(3);
            expect($option.eq(0)).to.have.value('student');
            expect($option.eq(1)).to.have.value('staff');
            expect($option.eq(2)).to.have.value('admin/admin_dashboard');
        });
        cy.get('form[action="/login/"] > button[type="submit"]').should('exist').should('contain.text','Login').click();
        cy.visit('/staff/37/goals/');
    })

    it('Verify all levels filter without goal selection and group selection',()=>{
        cy.contains('button','Apply filters').click();
        cy.on('window:alert', (message) => {
            expect(message).to.equal('Please selet a goal');
          });
    })

    it('Verify all levels filter with a goal selection without a group selection',()=>{
        cy.get(':nth-child(1) > .custom-control-label > h5').as('all goals').click();
        cy.get('input[name="all_goals"]').should('be.checked');
        cy.contains('button','Apply filters').click();
        cy.on('window:alert', (message) => {
            expect(message).to.equal('Please selet a group');
          });
    })

    it('Verify all goals checkbox with a all groups, all levels and not observed', ()=>{
        cy.get(':nth-child(1) > .custom-control-label > h5').as('all goals').click();
        cy.get('input[name="all_goals"]').should('be.checked');
        cy.get('[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1) > .custom-control-label').as('all groups').click();
        cy.get('input[name="all_groups"]').should('be.checked');
        cy.get('input[id="not_observed"]').should('be.checked');
        cy.contains('button','Apply filters').click();
    })

    it('Verify all goals checkbox with all groups,all levels and observed', ()=>{
        cy.get(':nth-child(1) > .custom-control-label > h5').as('all goals').click();
        cy.get('input[name="all_goals"]').should('be.checked');
        cy.get('[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1) > .custom-control-label').as('all groups').click();
        cy.get('input[name="all_groups"]').should('be.checked');
        cy.get('[style="height: 10vh"] > :nth-child(1) > .custom-control-label').as('not observed').click();
        cy.get('input[id="not_observed"]').should('not.be.checked');
        cy.contains('button','Apply filters').click();
    })

    it('Verify specific goal checkbox with a all groups, all levels and not observed', ()=>{
        cy.get(':nth-child(3) > .custom-control-label > h5').as('QA').click();
        cy.get('input[id="topic_89"]').should('be.checked');
        cy.get('[style="overflow-y: scroll;height: 30.7vh"] > :nth-child(1) > .custom-control-label').as('all groups').click();
        cy.get('input[name="all_groups"]').should('be.checked');
        cy.get('input[id="not_observed"]').should('be.checked');
        cy.contains('button','Apply filters').click();
    })

    it('Verify specific goal checkbox with a specific group, all levels and not observed', ()=>{
        cy.get(':nth-child(3) > .custom-control-label > h5').as('QA').click();
        cy.get('input[id="topic_89"]').should('be.checked');
        cy.get(':nth-child(3) > .custom-control > .custom-control-label').as('g1').click();
        cy.get('input[id="group_g1"]').should('be.checked');
        cy.get('input[id="not_observed"]').should('be.checked');
        cy.contains('button','Apply filters').click();
    })

    it('Verify specific goal checkbox with a specific group,specific level and not observed', ()=>{
        cy.get(':nth-child(3) > .custom-control-label > h5').as('QA').click();
        cy.get('input[id="topic_89"]').should('be.checked');
        cy.get(':nth-child(3) > .custom-control > .custom-control-label').as('g1').click();
        cy.get('input[id="group_g1"]').should('be.checked');
        cy.get('[style="overflow-y: scroll;height: 20vh"] > :nth-child(1) > .custom-control-label').as('All levels').click();
        cy.get('[style="overflow-y: scroll;height: 20vh"] > :nth-child(4) > .custom-control-label').as('Low').click();
        cy.get('input[id="not_observed"]').should('be.checked');
        cy.contains('button','Apply filters').click();
    })

    it('Verify observe specific goal checkbox with a specific group and a specific level and not observed', ()=>{
        cy.get(':nth-child(9) > .custom-control-label > h5').as('goal4').click();
        cy.get('input[id="topic_151"]').should('be.checked');
        cy.get(':nth-child(3) > .custom-control > .custom-control-label').as('g1').click();
        cy.get('input[id="group_g1"]').should('be.checked');
        cy.get('[style="overflow-y: scroll;height: 20vh"] > :nth-child(1) > .custom-control-label').as('All levels').click();
        cy.get('[style="overflow-y: scroll;height: 20vh"] > :nth-child(2) > .custom-control-label').as('Low').click();
        cy.get('input[id="not_observed"]').should('be.checked');
        cy.contains('button','Apply filters').click();
        cy.get('.is_late_False > .btn').as('Observe').click();
        cy.get('select[name="grade"]').as('Grade').select(11).wait(1000); // 11 means full mark (10)
    })

    it('Verify specific goal checkbox with a specific group,specific level and observed', ()=>{
        cy.get(':nth-child(9) > .custom-control-label > h5').as('goal4').click();
        cy.get('input[id="topic_151"]').should('be.checked');
        cy.get(':nth-child(3) > .custom-control > .custom-control-label').as('g1').click();
        cy.get('input[id="group_g1"]').should('be.checked');
        cy.get('[style="overflow-y: scroll;height: 20vh"] > :nth-child(1) > .custom-control-label').as('All levels').click();
        cy.get('[style="overflow-y: scroll;height: 20vh"] > :nth-child(2) > .custom-control-label').as('Low').click();
        cy.get('[style="height: 10vh"] > :nth-child(1) > .custom-control-label').as('Not observed').click();
        cy.get('input[id="not_observed"]').should('not.be.checked');
        cy.contains('button','Apply filters').click().wait(1000);
    })

    it('Verify unobserve specific goal checkbox with a specific group and a specific level and observed checkbox', ()=>{
        cy.get(':nth-child(9) > .custom-control-label > h5').as('goal4').click();
        cy.get('input[id="topic_151"]').should('be.checked');
        cy.get(':nth-child(3) > .custom-control > .custom-control-label').as('g1').click();
        cy.get('input[id="group_g1"]').should('be.checked');
        cy.get('[style="overflow-y: scroll;height: 20vh"] > :nth-child(1) > .custom-control-label').as('All levels').click();
        cy.get('[style="overflow-y: scroll;height: 20vh"] > :nth-child(2) > .custom-control-label').as('Low').click();
        cy.get('[style="height: 10vh"] > :nth-child(1) > .custom-control-label').as('Not observed').click();
        cy.get('input[id="not_observed"]').should('not.be.checked');
        cy.contains('button','Apply filters').click();
        cy.get(':nth-child(2) > div > .btn').as('Unobserve').click();
    })



});