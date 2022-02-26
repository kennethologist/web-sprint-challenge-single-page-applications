describe("form testing", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3001/pizza")
    })

    it("can add text to name textbox", () => {
        const nameInput = () => cy.get("input[name='name']");
        cy.get("input[name='name']").type("1234");

        nameInput().should("have.value", "1234")

    })

    it("can select multiple toppings", () => {
        const nameInput = () => cy.get("input[name=name]");
        cy.get("input[name=name]").type("1234");

        nameInput().should("have.value", "1234")
    })

    it("can submit form", () => {
        const submitButton = () => cy.get("button[type=submit]");
        submitButton().should("be.disabled");
        cy.get("input[name=name]").type("Ken Smith")
        cy.get("select[name=size]").select("medium");
        submitButton().should("not.be.disabled");

        submitButton().click();

    })
})