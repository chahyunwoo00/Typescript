// type Todo={
//   id:number;
//   title:string;
//   done:boolean;
// };

interface Todo{
  id:number;
  title:string;
  done:boolean;
}

//let todoItems:object[];
//let todoItems:{id:number;title:string;done:boolean;}[];
let todoItems:Todo[];

//api
function fetchTodoItems():Todo[]{
  const todos=[
    {id:1,title:'안녕',done:false},
    {id:2,title:'타입',done:true},
    {id:3,title:'스크립트',done:true},
  ]
  return todos;
}

//crud methods
function fectTodos():object[]{
  const todos=fetchTodoItems()
  return todos
}

function addTodo(todo:Todo):void{
  todoItems.push(todo)
}

function deleteTodo(index:number):void{
  todoItems.splice(index,1)
}

function completeTodo(index:number,todo:Todo):void{
  todo.done=true
  todoItems.splice(index,1,todo)
}

//business logic
function logFirstTodo():object{
  return todoItems[0]
}

function showCompleted():object[]{
  // return todoItems.filter(item=>item.done)
  return todoItems.filter(function(item){
    if(item.done){
      return item
    }
  })
}


function addTwoTodoItems():void{
  const item1={
    id:4,
    title:'아이템 4',
    done:false
  }
  addTodo(item1)
  addTodo({
    id:5,
    title:'아이템 5',
    done:false
  })
}

//유틸 함수
function log():void{
  console.log(todoItems)
}

todoItems=fetchTodoItems()
addTwoTodoItems()
log()