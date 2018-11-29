// // Another way of creating object - Using Object.create()
// const personPrototypes = {
//   greeting: function(){
//     return `Hello ${this.firstName} ${this.lastName}`;
//   },

//   getsMarried: function(newLastName){
//     this.lastName = newLastName;
//   }
// }

// const mary = Object.create(personPrototypes);
// mary.firstName = 'Mary';
// mary.lastName = 'William';
// mary.age = 30;

// mary.getsMarried('Thompson');

// console.log(mary.greeting());

// // Another way to use Object.create()
// const john = Object.create(personPrototypes, {
//   firstName: {value: 'John'},
//   lastName: {value: 'Doe'},
//   age: {value: 38}
// });

// console.log(john);

// console.log(john.greeting());