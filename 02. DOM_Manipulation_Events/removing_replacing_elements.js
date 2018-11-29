// //REPLACE ELEMENT

// //Create Element
// const newHeading = document.createElement('h2');

// //Add id
// newHeading.id = 'task-title';

// // //New text node
// newHeading.appendChild(document.createTextNode('Task List'));

// //Get the old heading
// const oldHeading = document.getElementById('task-title');

// //Parent Selection
// const cardAction = document.querySelector('.card-action');

// //Replace
// cardAction.replaceChild(newHeading, oldHeading);

// // console.log(newHeading);

// //REMOVE ELEMENT
// const list = document.querySelector('ul');
// const listItems = document.querySelectorAll('li');

// //Remove list items
// listItems[2].remove();

// //Remove child elements
// list.removeChild(listItems[0]);

// //CLASSES and ATTRIBUTES
// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];

// //Classes
// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');
// val = link;

// //Attribute
// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://google.com');
// val = link.setAttribute('title', 'Google');
// val = link.hasAttribute('title');
// val = link.removeAttribute('title');
// val = link;

// console.log(val);