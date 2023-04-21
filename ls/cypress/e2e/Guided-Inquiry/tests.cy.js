//Tests for Guided inquiry 
// checks that the title is correct
describe("Title Checker", () => {
    it("should have the correct title", () => {
      cy.visit("https://main.d14f06omhmz9oc.amplifyapp.com/Products1");
  
      // Check for correct title
      cy.title().should("equal", "React App");
    });
  });


// checks the footer exists
  describe("Footer Checker", () => {
    it("should have the correct footer", () => {
      cy.visit("https://main.d14f06omhmz9oc.amplifyapp.com/Products1");
  
      // Check for footer element
      cy.get("footer").should("be.visible");
    });
  });



  
//checks for the privacy policy to work in the footer 
  describe("Privacy Policy in Footer Checker", () => {
    it("The Privacy Policy should open ", () => {
      cy.visit("https://main.d14f06omhmz9oc.amplifyapp.com/Products1");
  
      // Check for footer element
      cy.get("footer").should("be.visible");
  
      // Click on privacy policy button
      cy.contains("Privacy Policy").click();
  
      // Check that privacy policy modal is displayed
      cy.get(".textcontainer").should("be.visible");
    });
  });
  
  //checker that name filter works by checking Mac in the text
  describe("Products1 component", () => {
    it("should filter products by name ", () => {
      cy.visit("https://main.d14f06omhmz9oc.amplifyapp.com/Products1");
  
      // Type Mac in the name search input
      cy.get('input[placeholder="Search by Name"]').type("Mac");
  
      // Verify that only products with "Mac" in their title are displayed
      cy.get(".products-container").find(".product-card").should("have.length", 1);
      cy.contains("Mac").should("be.visible");
  
    });
  });
  