// //EVENT BUBBLING

// // document.querySelector('.card-title').addEventListener('click', function(){
// //   console.log('card title');
// // });

// // document.querySelector('.card-content').addEventListener('click', function(){
// //   console.log('card content');
// // });

// // document.querySelector('.card').addEventListener('click', function(){
// //   console.log('card');
// // });

// // document.querySelector('.col').addEventListener('click', function(){
// //   console.log('col');
// // });

// //EVENT DELEGATION

// // const delItem = document.querySelector('.delete-item');

// // delItem.addEventListener('click', deleteItem);

// document.body.addEventListener('click', deleteItem);


// // function deleteItem(e){
// //   if(e.target.className === 'fa fa-remove'){
// //     console.log('delete item');
// //   }

// function deleteItem(e){
// //   if(e.target.parentElement.className === 'delete-item secondary-content'){
// //     console.log('delete item');
// //   }
  
//   //best way to target the links (if new class added in html element- no problem) 
//   if(e.target.parentElement.classList.contains('delete-item')){
//     console.log('delete item');
//     //remove any list item by parentElement
//     e.target.parentElement.parentElement.remove();
//   }


// }