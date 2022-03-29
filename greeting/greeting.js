'use strict';

// HANDLEBARS

// GREETING

// contains raw HTML
const source = document.getElementById('greet').textContent;

// fxn for replacing expressions w/ values of an object passed in. Returns a completed/compiled template in a string
const template = Handlebars.compile(source);

// object to pass into the fxn
const context = {
    greeting: 'Hello World!',
};

// call the fxn w/ the object as the argument. Save the compiled template to a variable.
const compiledHtml = template(context);

// select the element that will contain the template
const fill = document.getElementById('hello');

// assign the compiled template to the container element
fill.textContent = compiledHtml;
