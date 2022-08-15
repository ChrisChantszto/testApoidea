

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    get downthePage () {
        return $('#name')
    }

    get inputUsername () {
        return $('#name');
    }

    get inputEmail () {
        return $('#email'); // id
    }

    get inputContent () {
        return $('#content')
    }

    get swiper () {
        return $("[class='swiper-button-next swiper-button-white']");
    }

    get btnPage () {
        return $('.custom-control-label=Business Digest'); // class
    }

    get submitBtn () {
        return $('[class*="btn btn-dark submit-btn"]');
    }

    get digestIcon () {
        return $('[href="https://marketdigest.io/"]')
    }

    get facebookIcon () {
        return $('[href="https://www.facebook.com/marketdigest"]')
    }

    get InstagramIcon () {
        return $('[href="https://www.instagram.com/market_digest/"]')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open("https://apoideamedia.io/");
    }
}

module.exports = new LoginPage();
