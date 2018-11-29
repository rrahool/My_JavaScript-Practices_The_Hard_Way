// //Object.prototype
// //Person.prototype

// //Person Constructor
// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//     // this.calculateAge = function(){
//     //   const diff = Date.now() - this.birthday.getTime();
//     //   const ageDate = new Date(diff);
//     //   return Math.abs(ageDate.getUTCFullYear() - 1970);
//     // }
// }

// // Calculate Age Prototype
// Person.prototype.calculateAge = function(){
//   const diff = Date.now() - this.birthday.getTime();
//   const ageDate = new Date(diff);

//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// // Get Full Name Prototype
// Person.prototype.getFullName = function(){
//   return `${this.firstName} ${this.lastName}`;
// }

// // Gets Married Prototype - Manipulation
// Person.prototype.getsMarried = function(newLastName){
//   this.lastName = newLastName;
// }


// const john = new Person('John', 'Doe', '11-28-1980');
// const mary = new Person('Mary', 'Johnson', 'March 20 1978');

// console.log(mary);

// console.log(mary.getFullName());

// mary.getsMarried('Smith');

// console.log(mary.getFullName());

// console.log(mary.hasOwnProperty('birthday'));
// console.log(mary.hasOwnProperty('getFullName'));