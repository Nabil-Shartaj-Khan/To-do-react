import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import Todolist from './components/Todolist';

function App() {

  const[listTodo,setListTodo]=useState([]);


  const listAdd=(input)=>{
    if (input!==""){
      setListTodo([...listTodo,input])

    }
else{
      console.log("Enter a value")
    }

  }

  const deleteItem=(key)=>{

      let newList=[...listTodo];
      newList.splice(key,1)
      setListTodo([...newList]);
  }

  return (
    <>
    <h1 className='text-center text-success pt-3 display-3'>To-do app</h1>
    <Todo addList={listAdd}/>
    <h5 className='display-5 text-success text-center pt-5'>Following are the added task of yours</h5>
    <hr></hr>
    
          {listTodo.map((item, i) => {
        return <Todolist index={i} key={i} item={item} delete={deleteItem} />;
      })}
  

    </>
  )
}

export default App
