'use stict';

// HANDLEBARS

// LANGUAGES

// contains raw HTML
const source = document.getElementById('languagesTemp').textContent;

// fxn to replace expressions w/ values of the object passed in. Returns a compliled string template
const template = Handlebars.compile(source);

// object to pass into the fxn
const context = {
    languages: [
        { name: 'HTML', modern: true },
        { name: 'CSS', modern: true },
        { name: 'JavaScript', modern: true },
        { name: 'COBOL', modern: false },
    ],
};

// fxn called w/ object argument; saved to variable
const compiledHtml = template(context);
// const compiledHtml = Handlebars.compile(source)(context)

// element container for template
const handlebarContainer = document.getElementById('goals');

// element container assigned the template
handlebarContainer.innerHTML = compiledHtml;
// handlebarContainer.innerHTML = Handlebars.compile(source)(context)

// do the extra challenges at the end of the course
// create a project to try other helpers - such as with - try creating a helper
