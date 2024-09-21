const trashes=document.querySelectorAll('.cop');
const todos=document.querySelectorAll('.todo');
const todocontainer=document.querySelector('.todocontainer');
const addbutton=document.querySelector('.addto');

const newTodosName=document.querySelector('.newtodotext');
const body=document.querySelector('body');

const searchBox=document.querySelector('.searchbox');

const todoValue = newTodosName.value.trim();



newTodosName.addEventListener('focus', () => {
     if (newTodosName.value === "Add ToDo's..") {
         newTodosName.value = ' ';                      // Clear the default text
     }
 });

 newTodosName.addEventListener('blur', () => {
     
     if (newTodosName.value.trim()==='') {
         newTodosName.value = "Add ToDo's..";          // Set default text if empty
     }
 });

 searchBox.addEventListener('focus', () => {
     if (searchBox.value === "Search ToDo's..") {
         searchBox.value = '';                         // Clear the default text
     }
 });


 searchBox.addEventListener('blur', () => {
     if (searchBox.value.trim() === '') {
         searchBox.value = "Search ToDo's..";          // Set default text if empty
     }
 });



//i learned focus-blur thing.
// //for making new todos input empty when clicked
// newTodosName.addEventListener('click',(e)=>{
//      e.stopPropagation();
//      newTodosName.setAttribute('value',' ');
     
// });
// //for making searchbox empty when clicked
// searchBox.addEventListener('click',(e)=>{
//      e.stopPropagation();
//      searchBox.setAttribute('value',' ');

// });


// //for making default if user clicks somewhere else 
// body.addEventListener('click',()=>{
//      if(newTodosName.getAttribute('value')==' '){
//           newTodosName.setAttribute('value',"Add ToDo's..");
//      }

// });


// body.addEventListener('click',()=>{
//      if(searchBox.getAttribute('value')==' '){
//           searchBox.setAttribute('value',"Search ToDo's..");
//      }

// });








//Adding new todo element with style and delete event





addbutton.addEventListener('click',()=>{
     const todoValue = newTodosName.value.trim();
     if(todoValue != ' ' && todoValue != "Add ToDo's.."){
          const newtodoelement=document.createElement('div');              //creating todos div element
          newtodoelement.textContent=todoValue;                
          newtodoelement.classList.add('todo');

          const trashicon=document.createElement('i');
          trashicon.classList.add('cop', 'far', 'fa-trash-alt', 'delete');   //creating trash icon element
          newtodoelement.appendChild(trashicon);

          trashicon.addEventListener('click',e=>{    //adding delete event to trash icon  
          e.target.parentElement.remove();
          });
     
          todocontainer.prepend(newtodoelement); //adding new element on top
          newTodosName.value="Add ToDo's..";
     }
     
     
});







//trash icon delete event
trashes.forEach(trash=> {
     trash.addEventListener('click',e =>{
          e.target.parentElement.remove();
     });
});