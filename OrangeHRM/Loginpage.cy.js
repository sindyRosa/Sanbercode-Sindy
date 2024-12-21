// describe('template spec', () => {
//  it('passes', () => {
//    cy.visit('https://example.cypress.io')
//  })
// })
describe('Login Feature',() => {
  it('User Login with Valid credentials',() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
      cy.get('[name="username"]').type('Admin');
      cy.get('[name="password"]').type('admin123');
      cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
      cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text','Dashboard')
  })
  // it('User Login with Invalid Username',() => {
  //     cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').
  //     cy.get('[name="username"]')
  // })
  // it('User Login with Invalid Password',() => {
  //     cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').
  //     cy.get('[name="username"]')
  // })

})