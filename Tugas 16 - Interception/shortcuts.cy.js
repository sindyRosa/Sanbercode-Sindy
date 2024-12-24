describe('Login Feature',() => {
    //TC1
    it('Tampilan login fitur shortcuts',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.intercept("GET","https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/shortcuts").as("shortcuts");
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();

        cy.wait("@shortcuts").then((intercept) => {
            var responseBody = intercept.response.body;
            expect(intercept.response.statusCode).to.equal(200); 
            expect(responseBody).to.have.property('data')
            // Memastikan bahwa meta berisi informasi yang valid
            expect(responseBody.data).to.have.property('leave.assign_leave');
            expect(responseBody.data).to.have.property('leave.leave_list');
            expect(responseBody.data).to.have.property('leave.apply_leave');
            expect(responseBody.data).to.have.property('leave.my_leave');
            expect(responseBody.data).to.have.property('time.employee_timesheet');
            expect(responseBody.data).to.have.property('time.my_timesheet');

            
        })
    })
})