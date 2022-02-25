describe("lambda-eats", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    });
    const nameInput = () => cy.get("input[name=name]");
    const specialInput = () => cy.get('input[name=special]')
    const cheeseTopping = () => cy.get("input[name=cheese]");
    const sizeInput = () => cy.get('select')
    
    
    it('sanity checks', () => {
        expect(2).to.equal(2);
    });

    it("checks the inputs", () => {
        cy.get("#order-pizza").click();
        nameInput().type('prim');
        cheeseTopping().click();
        specialInput().type('use back door');
        sizeInput().select('Medium')
        cy.get("#order-button").click();
    })
});

// - [ ] test that you can add text to the box
// - [ ] test that you can select multiple toppings
// - [ ] test that you can submit the form