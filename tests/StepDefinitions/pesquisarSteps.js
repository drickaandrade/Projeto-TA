/**
 * File: pesquisarStep.js
 * Data: 13/07/2020
 * Autor: Adriana Matos
 */

const { Given, When, Then } = require('cucumber');


const HomePage = require('../pages/HomePage');
const ResultPage = require('../pages/ResultPage');

const homePage = new HomePage();
const resultPage = new ResultPage();

Given(/^eu estou na tela de pesquisa do Google$/, () => {
    homePage.open();

});

When(/^eu digito os dados da pesquisa "([^"]*)"$/, (search) => {
    homePage.pesquisar(search);

});

Then(/^eu visualizo o resuldado da pesquisa "([^"]*)"$/, (message) => {
    let result = resultPage.resultado();
    console.log(result);
});