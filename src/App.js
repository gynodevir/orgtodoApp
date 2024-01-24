
import './App.css';
import { useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import {Task} from "./Task"


function App() {
  let [tasks,setTasks]=useState([])
  let [getData,setData] =useState("")
  const prodata=(event)=>{
//  console.log(event.target.value)
if(event.target.value===""){
  return
}
else{
  setData(event.target.value)
}
  }
  const stodata=()=>{
    const task={
      id: (tasks.length===0)? 1 : tasks[tasks.length -1].id +1,
      taskName : getData,
      isComplete : false
    }
    setTasks([...tasks,task])
    setData("")
  }
  const deleteTask=(id)=>{
    setTasks(tasks.filter((tas)=>{
      return tas.id!==id
    }))
  }
  const comTaks = (id) => {
    setTasks(tasks.map((tas) => {
      if (tas.id === id) {
        return {
          ...tas,
          isComplete: true,
        };
      }
      return tas; // return the task as is if the condition is not met
    }));
  };
  
  return (
    <div className="App">
      <h1>To Do App</h1>
      <div className="getData">
        <input type='text' placeholder='Enter the Task' value={getData} onChange={prodata} id='task'/><button onClick={stodata} id="add-task" >+</button>

      </div>
      <div className='addTask'>
         {tasks.map((tas)=>{
          return ( 
            
            <Task taskName={tas.taskName} id={tas.id} deleteTask={deleteTask} comTaks={comTaks} isComplete={tas.isComplete}/>
          );
         })}
      </div>
    </div>
  );
}

export default App;
