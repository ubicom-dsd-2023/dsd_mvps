// Import required libraries and files
const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');
// 导入 jQuery 库
const $ = require('jquery');
global.$ = global.jQuery = $;


// Read the HTML file
const html = fs.readFileSync(path.resolve(__dirname, '../pages/sign-in.html'), 'utf8');

// Set up JSDOM
const { window } = new JSDOM(html, { runScripts: 'dangerously' });
global.window = window;
global.document = window.document;



// Test login functionality
describe('Login functionality', () => {
  beforeEach(() => {
    // Reset form fields
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('isIncorrect').innerHTML = '';
  });

  test('Valid login', () => {
    // Set values for input fields
    document.getElementById('email').value = 'admin@example.com';
    document.getElementById('password').value = 'password';

    // Simulate clicking the login button
    const loginButton = document.getElementById('login');
    loginButton.click();

    // Assert successful login
    expect(window.location.href).toContain('dashboard.html?id=12345');
  });

  test('Invalid login', () => {
    // Set values for input fields
    document.getElementById('email').value = 'invalid@example.com';
    document.getElementById('password').value = 'wrongpassword';

    // Simulate clicking the login button
    const loginButton = document.getElementById('login');
    loginButton.click();

    // Assert login failure and display error message
    const errorDiv = document.getElementById('isIncorrect');
    expect(errorDiv.textContent).toContain('Email or Password is incorrect');
  });
});
