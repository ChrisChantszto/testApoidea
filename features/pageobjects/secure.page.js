

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('.d-md-flex*=我們會在一個工作天內回覆你，謝謝你的查詢 !');
    }
}

module.exports = new SecurePage();
