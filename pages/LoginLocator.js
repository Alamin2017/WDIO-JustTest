class LoginLocator {
    get EmailAddress () {
        return $('//*[@id="form"]/div/div/div[1]/div/form/input[2]');
    }
    get Password () {
        return $('//input[@placeholder="Password"]');
    }
    get btnLogin () {
        return $('//*[@id="form"]/div/div/div[1]/div/form/button');
    }
    get btnlogout()
    {
        return $('//*[@id="header"]/div/div/div/div[2]/div/ul/li[4]/a')
    }
}
module.exports = new LoginLocator();