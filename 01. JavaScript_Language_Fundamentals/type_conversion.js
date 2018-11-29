let val;

//Number to String
val = String(5);
val = String(4);

//Bool to String
val = String(true);
val = String(false);

//Date to String
val = String(new Date());

//Array to String
val = String([1,2,3,4]);

//Using toSring()
val = new Date().toString();
val = new Date().toDateString();
val = (545).toString();

val = Number('5');
val = Number('hello');
val = Number(true);
val = Number(false);
val = Number([1,2,3]);
val = Number(new Date());

val = parseInt('100.30');
val = parseFloat('100.30');

console.clear();
console.log(val);
console.log(typeof val);
//console.log(val.length);
console.log(val.toFixed(3));