//Function Decorations & Statements

console.clear();

function greet(firstName = 'John', lastName = 'Doe'){
  // if(typeof firstName === 'undefined'){firstName = 'John'}
  // if(typeof lastName === 'undefined'){lastName = 'Doe'}
  //console.log('Hello');
  return 'Hello' + ' ' + firstName + ' ' + lastName;
}

//greet();
//console.log(greet('Rahul', 'Biswas'));
console.log(greet());


//Function Expressions

const square = function(a = 9){
  return a*a;
};

// console.log(square(6));

//Immidiately Invokable Function Expressions - IIFEs
//IIFE without parameter
(function(){
  console.log('IIFE Ran...');
})();

//IIFE with parameter
(function(name){
  console.log('Hello' + ' ' + name);
})('Rahul');


//PROPERTY METHODS

const todo = {
  add: function(){
    console.log('Add todo...');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function(){
  console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();