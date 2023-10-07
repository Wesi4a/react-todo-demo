import './App.css';
import ToDoTable from './components/ToDoTable';
import React,{useState} from 'react';
import ToDoForm from './components/ToDoForm';

function App() {

  const[showAddTodoForm,setShowAddTodoForm] = useState(false);

  const[todos,setTodos] = useState([
    {rowNumber: 1,rowDescription: 'Feed puppy',rowAssigned: 'User1'},
    {rowNumber: 2,rowDescription: 'Water Plants',rowAssigned: 'User2'},
    {rowNumber: 3,rowDescription: 'Make Dinner',rowAssigned: 'User1'},
    {rowNumber: 4,rowDescription: 'Charge phone battery',rowAssigned: 'User1'}
  ]
  )

  const addToDo = (description,assigned) =>{
    let rowNumber = 0;
    if(todos.length > 0){
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    }else{
      rowNumber = 1;
    }
      const newTodo = {
        rowNumber: rowNumber,
        rowDescription: description,
        rowAssigned:assigned
      };
      setTodos(todos => [...todos,newTodo])
    
  }

  const deleteTodo = (deleteTodoRowNumber) => {
    let filtered = todos.filter(function(value){
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  } 

  return (
    <div className='mt-5 container'>
      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className="card-body">
          <ToDoTable todos={todos} deleteTodo={deleteTodo}/>
          <button onClick={() => setShowAddTodoForm(!showAddTodoForm)} className='btn btn-primary' >
            {showAddTodoForm ? 'Close New Todo' : 'New Todo'}
          </button>
          {showAddTodoForm && 
          <ToDoForm addToDo={addToDo}/>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
