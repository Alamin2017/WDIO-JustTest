class ElementActions {
    async doClick(element){
        element.waitForDisplayed()
        element.click()
    }

    async doEnterValue(element, value){
        element.waitForDisplayed()
        element.setValue(value)
    }
}
module.exports = new ElementActions();