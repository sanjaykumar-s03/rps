const todoList = [
  {
  name : 'play',
  date : '10-10-2010'
  },
  {
    name: 'write',
    date : '20-10-2010'
  }
];

rendertodoList();

function rendertodoList(){
let todoListhtml='';

todoList.forEach((todoObject,index)=>{
   
  const {name ,date} = todoObject;

  const html = `
  <div>${name}</div> 
  <div>${date}</div>
  <button  class="delete-todo-button js-delete-button">Delete</button>
  `;
  todoListhtml+=html;
});
// for(let i=0;i<todoList.length;i++){
//   const todoObject = todoList[i];
//   const {name ,date} = todoObject;

//   const html = `
//   <div>${name}</div> 
//   <div>${date}</div>
//   <button onclick="
//     todoList.splice(${i},1);
//     rendertodoList();
//   " class="delete-todo-button">Delete</button>
//   `;
//   todoListhtml+=html;
//   }

  document.querySelector('.js-todolist').innerHTML = todoListhtml;

  document.querySelectorAll('.js-delete-button').
    forEach((deleteButton,index)=>{
      deleteButton.addEventListener('click',()=>{
        todoList.splice(index,1);
        rendertodoList();
  
      });
    } );
}
document.querySelector('.js-add-button').addEventListener('click',()=>{
  addTodo();
});

  function addTodo() {
   const inputElement = document.querySelector('.js-name-input');
   const name = inputElement.value;
   const dateinputElement = document.querySelector('.js-date-input');
   const date = dateinputElement.value;
   todoList.push(
    {name,date}
    );

   inputElement.value='';

   rendertodoList();
  }