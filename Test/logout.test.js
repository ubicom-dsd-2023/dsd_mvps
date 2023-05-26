const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');
const $ = require('jquery')

// Read the HTML file
const html = fs.readFileSync(path.resolve(__dirname, '../pages/dashboard.html'), 'utf8');

// Set up JSDOM
const { window } = new JSDOM(html, { runScripts: 'dangerously' });
global.window = window;
global.document = window.document;

test('logout',()=>{
    const loginButton = document.getElementById('logout');
    loginButton.click();

    // Assert successful login
    expect(window.location.href).toContain('sign-in.html');
})