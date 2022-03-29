'use strict';

// HANDLEBARS

//GIF
// contains raw HTML
const source = document.getElementById('ifHelper').textContent;

// fxn for replacing expressions w/ values on an object passed in as an argument. Returns a completed/compiled template in a string
const template = Handlebars.compile(source);

// object to pass into the fxn
const context = {
    opinion: false,
};

// call the fxn w/ the object as the argument. Save the compiled template to a variable.
const compiledHtml = template(context);

// select the element that will contain the template
const debateElement = document.getElementById('debate');

// assign the compiled template to the container element
debateElement.innerHTML = compiledHtml;
// NOTICE how the property must be innerHTML in this case
