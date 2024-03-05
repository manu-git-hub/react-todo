import './App.css'
import { useState} from 'react';
function App() {
  const [toDos, setTodos]=useState([]);
  const [toDo, setTodo]= useState("");

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(event)=>setTodo(event.target.value)} type="text" placeholder="🖊️ Add item..." /> 
        <i onClick={()=>setTodos([...toDos,{id:Date.now(), text:toDo, status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos"> 
        {toDos.map((obj)=>{ 
          return( <div className="todo">
            <div className="left">
              <input onChange={(e)=>{
                console.log(e.target.checked) // Logging checkbox status
                console.log(obj) // Logging current todo object
                setTodos(toDos.filter(obj2=>{
                  if(obj2.id===obj.id){
                    obj2.status=e.target.checked // Updating status of todo item
                  }
                  return  obj2
                }))
              }}
              value={obj.status} type="checkbox" name="" id="" />
              <p> {obj.text}</p>
            </div>
            <div className="right">
              <i onClick={() => {
                      const filteredTodos = toDos.filter(todo => todo.id !== obj.id); // Filtering out the todo item to delete
                      setTodos(filteredTodos); // Updating todo list without the deleted item
                    }}  className="fas fa-times"></i>
            </div>
          </div>)
        })}
        <div>
           {/* Displaying completed todos */}
          {toDos.map((obj)=>{
              if(obj.status){
                return(<h1>{obj.text}</h1>) // Displaying completed todo text
              }
              return null
            })}
        </div>
      </div>
    </div>
  );
}

export default App;