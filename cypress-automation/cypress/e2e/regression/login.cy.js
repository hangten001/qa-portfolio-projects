describe("Regression Suite - Login", () => {
	it("Valid Login", () => {
		cy.visit("https://opensource-demo.orangehrmlive.com/");

		cy.get('input[name="username"]').type("Admin");
		cy.get('input[name="password"]').type("admin123");

		cy.get('button[type="submit"]').click();

		cy.url().should("include", "/dashboard");
	});

	it("Invalid Login", () => {
		cy.visit("https://opensource-demo.orangehrmlive.com/");

		cy.get('input[name="username"]').type("wrong");
		cy.get('input[name="password"]').type("wrong");

		cy.get('button[type="submit"]').click();

		cy.contains("Invalid credentials").should("be.visible");
	});

	it("Wrong Password only", () => {
		cy.visit("https://opensource-demo.orangehrmlive.com/");

		cy.get('input[name="username"]').type("Admin");
		cy.get('input[name="password"]').type("wrong123");

		cy.get('button[type="submit"]').click();

		cy.contains("Invalid credentials").should("be.visible");
	});
});

// by YanskiDev
