'use strict';

// HANDLEBARS

// EACHBLOCK[S]
// iterate through array

// raw HTML
const source = document.getElementById('eachHelper').innerHTML;

// fxn used to replace expressions w/ values of the object passed in. Returns a compiled template string
const template = Handlebars.compile(source);

// object to pass in
const context = {
    // newArray: ['a', 'b', 'c'],
    newArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};

// fxn called w/ object argument & saved to variable
const compiledHtml = template(context);

// element container for template
const displayBlocks = document.getElementById('display');

// assign template to container
displayBlocks.innerHTML = compiledHtml;
