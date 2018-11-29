// // Person Constructor
// function Person(name, dob){
//   this.name = name;
//   this.birthday = new Date(dob);

//   this.calculateAge = function(){
//     // subtract the getTime() method of birthday from today's date
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);

//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }
// }

// // console.log(this);

// const rahul = new Person('Rahul', '07-08-1994');

// console.log(rahul.calculateAge());
