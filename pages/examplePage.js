const { I } = inject();

module.exports = {
    // insert your locators and methods here
    title: "h1",
    assertTitle() {
        I.seeElement(this.title);
    },
};
