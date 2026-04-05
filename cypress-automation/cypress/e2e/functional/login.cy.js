describe("Login Functionality Test", () => {
	beforeEach(() => {
		cy.visit("https://opensource-demo.orangehrmlive.com/");
	});

	it("should login with valid credentials", () => {
		cy.get('input[name="username"]').type("Admin");
		cy.get('input[name="password"]').type("admin123");
		cy.get('button[type="submit"]').click();

		// Expected result
		cy.url().should("include", "/dashboard");
		cy.contains("Dashboard").should("be.visible");
	});

	it("should show error with invalid credentials", () => {
		cy.get('input[name="username"]').type("wronguser");
		cy.get('input[name="password"]').type("wrongpass");
		cy.get('button[type="submit"]').click();

		// Expected result
		cy.contains("Invalid credentials").should("be.visible");
	});
});
