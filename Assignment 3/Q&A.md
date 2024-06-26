in this assignment you will build the back end for the web application that you designed in assignment 1.
Remember, we are only building back end in this assignment.

Description:
Same as assignment 1.

Additional Details:

Back end must include following components/modules:

- Login module
- Client Profile Management module
- Fuel Quote module, includes list of quote history for a client.
- Pricing module. Only create a class. You will implement this in last assignment.

Important deliverables:

- You should have validations in place for required fields, field types, and field lengths in backend code as well.
- All backend code should be covered by unit tests. Code coverage should be grater than 80%.
- Research how to run the code coverage reports. Each IDE has plugins to generate reports. Here are few pointers. https://stackify.com/code-coverage-tools/
  Links to an external site.
- All front end should be connected to back end. Form data should be populated from backend. Backend should receive data from front end, validate, and prepare it to persist to DB.
- WE ARE NOT IMPLEMENTING DB yet. For this assignment you can hard code the values.

NOTE: Only provide a word / pdf doc. You should use GitHub for your group collaboration and code.

Answer these questions:

1. Provide link to GitHub repository for TAs to view the code. Code should include unit tests.(5 points)

https://github.com/Angel-Sharma/COSC4353/tree/913d268168517f3f1e6022729f53540701d73ea2/Project

2. List what backend technologies you are using and why? (2 points)

We are using Node js, express ,and jest for code coverage

To run code coverage using jest:

    1. Install Jest. Open terminal and type: npm install --save-dev jest
    2. Once installed, type in terminal: npx jest --coverage

3. IMPORTANT: list who did what within the group. TAs should be able to validate in GitHub, otherwise team members who didn't contribute will receive a ZERO.

Contributed Login Module and registration module - Suryansh Sharma

Contributed Pricing Module - Benjamin Mogeni

Contributed code coverage reports for all the important backend modules that were implemented. This includes the user.js (client profile management), quote.js (fuel quote module), and loginVal.js (login module). - Abhinav Krothapalli

Created the user profile, user updater, quote creation, and quote history modules and endpoints. Created the pseudo-database that is used in lieu to query for information until a proper backend is implemented. Additionally, did some restructuring of the project for easier maintainability. - Ryan Ball
