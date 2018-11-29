//FOR LOOP

console.clear();
for(let i = 0; i < 10; i++){
  if(i === 2){
    console.log('2 is my favorite');
    continue;
  }
  console.log(i);
}

console.clear();
//WHILE LOOPS
//DO WHILE LOOP

//LOOP THROGH ARRAYS
const cars = ['Ford', 'BMW', 'Audi', 'Toyota'];

//using for loop
// for(let i = 0; i < cars.length; i++){
//   console.log(cars[i]);
// }

//using foreach loop
cars.forEach(function(car, index, array){
  console.log(`${index} - ${car}`);
  console.log(array);
  //console.log(`${array}`);
});

//MAP
console.clear();

const users = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Sara'},
  {id: 3, name: 'Kaven'},
  {id: 4, name: 'Steve'},
];

const ids = users.map(function(user){
  return user.id;
});

console.log(ids);

//FOR IN LOOP
console.clear();

const user = {
  firstName: 'Rahul',
  lastName: 'Biswas',
  age: 25
}

for(let x in user)
  console.log(`${x}: ${user[x]}`);