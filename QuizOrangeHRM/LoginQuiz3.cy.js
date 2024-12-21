/// <reference types="cypress"/>
 
describe('Login Feature',() => {
    //TC1
    //it('Tampilan login',() => {
        //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
        //cy.get('[name="username"]').type('Admin');
        //cy.get('[name="password"]').type('admin123');
        //cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
    //})
    //TC2
    //it('Pengguna dapat login menggunakan data valid',() => {
        //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
        //cy.get('[name="username"]').type('Admin');
        //cy.get('[name="password"]').type('admin123');
        //cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        //cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text','Dashboard')
    //})
    //TC3
    //it('Pengguna dapat login dengan username dan password minimum yang sesuai',() => {
        //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
        //cy.get('[name="username"]').type('Admin');
        //cy.get('[name="password"]').type('admin123');
        //cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        //cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text','Dashboard')
    //})
    //TC4
    //it('Pengguna dapat login dengan username dan password karakter alfanumerik',() => {
        //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
        //cy.get('[name="username"]').type('Admin');
        //cy.get('[name="password"]').type('admin123');
        //cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        //cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text','Dashboard')
    //})
    //TC5
    //it('Pengguna dapat login yang berisi karakter huruf abjad besar dan huruf abjad kecil.',() => {
        //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
        //cy.get('[name="username"]').type('Admin');
        //cy.get('[name="password"]').type('admin123');
        //cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        //cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text','Dashboard')
    //})
    //TC6
    //it('Pengguna login setelah reset kata sandi untuk memastikan kata sandi baru berfungsi', () => {
        //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // Mengunjungi halaman login
        //cy.get('[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]').click() // Mengunjungi halaman reset password
        //cy.get('[class="orangehrm-forgot-password-container"]').should('contain','Reset Password')
        //cy.get('[name="username"]').type('Admin'); // Mengisi username
        //cy.get('[class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset"]').click(); // Klik tombol "Reset Password"
        //cy.get('[class="orangehrm-forgot-password-container"]').should('contain','Reset Password')
    //})

    //cancel
    //it('cancel reset password', () => {
        //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // Mengunjungi halaman login
        //cy.get('[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]').click() // Mengunjungi halaman reset password
        //cy.get('[class="orangehrm-forgot-password-container"]').should('contain','Reset Password')
        //cy.get('[name="username"]').type('Admin'); // Mengisi username
        //cy.get('[class="oxd-button oxd-button--large oxd-button--ghost orangehrm-forgot-password-button orangehrm-forgot-password-button--cancel"]').click(); // Klik tombol "Reset Password"
        //cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('contain','Login')
    //})
    //TC7
    //it('User Login with Invalid Username',() => {
         //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         //cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
         //cy.get('[name="username"]').type('adminn')
         //cy.get('[name="password"]').type('admin123');
         //cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
         //cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('contain','Login')
    //})
    //TC8
    //it('User Login with Invalid Password',() => {
         //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         //cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
         //cy.get('[name="username"]').type('Admin')
         //cy.get('[name="password"]').type('Aku12345');
         //cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
         //cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('contain','Login')
    //})
    //TC9
    //it('Username kosong',() => {
        //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
        //cy.get('[name="username"]').type('  ')
        //cy.get('[name="password"]').type('admin123');
        //cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        //cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('contain','Login')
   //})
   //TC10
   //it('Password Kosong',() => {
        //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
        //cy.get('[name="username"]').type('Admin')
        //cy.get('[name="password"]').type('  ');
        //cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        //cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('contain','Login')
    //})
    //TC11
    it('Username dan password invalid',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
        cy.get('[name="username"]').type('Hallo')
        cy.get('[name="password"]').type('hallo123');
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('contain','Login')
    })
})