/**
 * File: resultPage.js
 * Data: 13/07/2020
 * Autor: Adriana Matos
 */

class ResultPage {
    // Define os elementos
    get resultLBL() { return $('div#rso div:nth-child(1) > div > div.r > a:nth-child(1) > h3') }

    // Metodo dos elementos de ação
    resultado() {
        this.resultLBL.waitForDisplayed();
        return this.resultLBL.getText();
    }

}

module.exports = ResultPage;

