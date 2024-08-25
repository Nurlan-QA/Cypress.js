describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');    // Открываем сайт
         cy.get('#mail').type('german@dolnikov.ru'); // Вводим логин
         cy.get('#pass').type('iLoveqastudio1'); // Вводим пароль
         cy.get('#loginButton').click(); // Нажимаем кнопку Вход
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Видим текст об успешной авторизации
         cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Видим крестик
     })

     it('Неверный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/');    // Открываем сайт
        cy.get('#mail').type('boomboom.ru'); // Вводим логин
        cy.get('#pass').type('iLoveqastud'); // Вводим пароль
        cy.get('#loginButton').click(); // Нажимаем кнопку Вход
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Видим текст о неуспешном входе
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Видим крестик
    })

    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');    // Открываем сайт
        cy.get('#mail').type('german.ru'); // Вводим логин
        cy.get('#pass').type('iLoveqastudio1'); // Вводим пароль
        cy.get('#loginButton').click(); // Нажимаем кнопку Вход
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Видим сообщение
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Видим крестик
    })

    it('Нажать «Забыли пароль»', function () {
        cy.visit('https://login.qa.studio/');    // Открываем сайт
        cy.get('#forgotEmailButton').click(); // Кликаем по кнопке восстановить пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Вводим почту для восстановления пароля
        cy.get('#restoreEmailButton').click(); // Кликаем по кнопке
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Видим сообщение
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Видим крестик
    })

    it('Ввести почту без @', function () {
        cy.visit('https://login.qa.studio/');    // Открываем сайт
        cy.get('#mail').type('germandolnikov.ru'); // Вводим логин
        cy.get('#pass').type('iLoveqastudio1'); // Вводим пароль
        cy.get('#loginButton').click(); // Нажимаем кнопку Вход
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Видим сообщение
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Видим крестик
    })

    it('Проверка игнора регистра почты', function () {
        cy.visit('https://login.qa.studio/');    // Открываем сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Вводим логин
        cy.get('#pass').type('iLoveqastudio1'); // Вводим пароль
        cy.get('#loginButton').click(); // Нажимаем кнопку Вход
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Видим сообщение
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Видим крестик
    })

})
 

 