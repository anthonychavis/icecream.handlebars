'use strict';

// HANDLEBARS

// select script w/ html
const source = document.getElementById('iScream').innerHTML;

// fxn
const template = Handlebars.compile(source);

// object
const context = {
    flavor: 'chocolate chip',
};

// call fxn w/ object
const compiledHtml = template(context);

// html container
const scream = document.getElementById('scream');

// assign
scream.innerHTML = compiledHtml;
