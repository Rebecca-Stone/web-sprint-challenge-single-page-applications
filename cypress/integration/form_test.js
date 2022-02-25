describe("lambda-eats", () => {
    //making sure to start off at our site
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    });
    //this will grab the name input for us to test
    const nameInput = () => cy.get("input[name=name]");
    //this will grab the special instructions input for us to test
    const specialInput = () => cy.get('input[name=special]')
    //this will grab the cheese topping checkbox for us to test
    const cheeseTopping = () => cy.get("input[name=cheese]");
    //this will grab the select size dropdown for us to test
    const sizeInput = () => cy.get('select')
    
    //basic sanity check
    it('sanity checks', () => {
        expect(2).to.equal(2);
    });


    it("checks the inputs", () => {
        //this clicks the button to place an order
        cy.get("#order-pizza").click();
        //this types in a name
        nameInput().type('prim');
        //this chooses the cheese topping
        cheeseTopping().click();
        //this enters in a special instruction
        specialInput().type('use back door');
        //this selects an option from the size dropdown
        sizeInput().select('Medium')
        //this submits the order
        cy.get("#order-button").click();
    })
});
