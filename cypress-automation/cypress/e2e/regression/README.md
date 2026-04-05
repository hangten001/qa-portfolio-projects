🧪 Cypress Regression Testing - Login Suite
📌 Overview

This project demonstrates Regression Testing using Cypress to validate the login functionality of a web application.

Regression testing ensures that existing features still work correctly after changes or updates.

🚀 Tools Used

- Cypress – End-to-end testing framework
- JavaScript
- Node.js
- OrangeHRM Demo App

🌐 Application Under Test

👉 https://opensource-demo.orangehrmlive.com/

🧪 Test Scenarios

This regression suite covers:

✅ 1. Valid Login
Enter correct credentials
Expect redirect to dashboard
❌ 2. Invalid Login
Enter wrong username and password
Expect error message: Invalid credentials
❌ 3. Wrong Password Only
Enter correct username and wrong password
Expect error message

📂 Project Structure

cypress/
e2e/
login.cy.js
cypress.config.js

👨‍💻 Author

YanskiDev
Aspiring QA Engineer

⭐ Note

This project is for learning purposes and demonstrates basic regression testing skills using Cypress.
