/**
 * File: pesquisarPage.js
 * Data: 13/07/2020
 * Autor: Adriana Matos
 */

class HomePage {
    // Define os elementos
    get imputSearch() { return $('input[name="q"]') }

    // Metodo dos elementos de ação
    pesquisar(search){
        this.imputSearch.waitForDisplayed();
        this.imputSearch.setValue(search);
        browser.keys('Enter');
    }

    open(){
        browser.url('/')
    }
}

module.exports = HomePage;