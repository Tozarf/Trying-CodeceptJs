Feature("example");

Scenario("My first test", ({ I, examplePage }) => {
    I.amOnPage("https://example.com/");
    // I.seeElement("h1");
    examplePage.assertTitle();
});
