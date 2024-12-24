describe('Login Feature',() => {
    //TC1
    it('Tampilan login',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.intercept("GET","https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary").as("ActionSummary");
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        cy.wait("@ActionSummary").then((intercept) => {
            var responseBody = intercept.response.body;
            //validasi respons status code 200
            expect(intercept.response.statusCode).to.eq(200);
            //validasi respons status code
            expect(responseBody).to.have.property('data').that.is.an('array');
            expect(responseBody).to.have.property('meta');
            expect(responseBody).to.have.property('rels');
        cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text','Dashboard')
    })
})
})