describe('Login Feature',() => {
    //TC1
    it('Tampilan login fitur location',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.intercept("GET","https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/locations").as("locations");
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        cy.wait("@locations").then((intercept) => {
            var responseBody = intercept.response.body;
            expect(responseBody).to.have.property('data').that.is.an('array');
                responseBody.data.forEach((response) => {
            expect(intercept.response.statusCode).to.equal(200); 
            //item dalam array "data"
            expect(response).to.have.property('location');
            expect(response.location).to.have.property('id');
            expect(response.location).to.have.property('name');
            
            expect(response).to.have.property('count').that.is.a('number');
  
            //meta
            expect(responseBody.meta).to.have.property('otherEmployeeCount');
            expect(responseBody.meta).to.have.property('unassignedEmployeeCount');
            expect(responseBody.meta).to.have.property('totalLocationCount');
        })
    })
})
}); 