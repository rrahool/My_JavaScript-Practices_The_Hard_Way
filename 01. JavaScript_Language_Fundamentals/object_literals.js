const person = {
  firstName: 'Rahul',
  lastName: 'Biswas',
  age: 25,
  email: 'rahul@gmail.com',
  hobbies: ['music', 'sport'],
  address: {
      city: 'Chittagong',
      country: 'Bangladesh'
  },
  getBirthYear: function(){
    return 2018 - this.age;
  }
}

let obj_val;

obj_val = person.firstName;
obj_val = person['lastName'];
obj_val = person.age;
obj_val = person.hobbies[1];
obj_val = person.address.city;
obj_val = person.getBirthYear();

console.clear();
console.log(obj_val);

//Arrays of objects

const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 28},
  {name: 'Mary', age: 36}
]

for(let i = 0; i < people.length; i++){
  console.log(people[i].name + " " + people[i].age);
}