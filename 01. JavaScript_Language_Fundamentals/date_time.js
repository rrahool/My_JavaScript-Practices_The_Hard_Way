//Date() is an Object Reference, not Function
let date_time_val;

const today = new Date();
let birthday = new Date('06-17-2018 05:18:00');
birthday = new Date('September 10 1981');
birthday = new Date('06/17/1981');


date_time_val = today.getMonth(); //Index starts from 0, Jan-0; Feb-1; March-2; etc.
date_time_val = today.getDate(); 
date_time_val = today.getDay();
date_time_val = today.getFullYear();
date_time_val = today.getHours();
date_time_val = today.getMinutes(); 
date_time_val = today.getSeconds(); 
date_time_val = today.getMilliseconds(); 
date_time_val = today.getTime();  //Timestamp

birthday.setMonth(5);
birthday.setDate(25);
birthday.setFullYear(2018);
birthday.setHours(10);
birthday.setMinutes(5);
birthday.setSeconds(50);


console.clear();
console.log(birthday);