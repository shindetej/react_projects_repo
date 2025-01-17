import { useState } from 'react';
import './App.css';

function App() {
  const [tasks,setTasks] = useState([
    {id: 2121, name: "Learn State Management In React", completed: true}, 
    {id: 3131, name: "Attend Onboarding Meet", completed: false}, 
    {id: 4141, name: "Evening Meet Collegues", completed: false}
   ]);


  const removeTask = (id)=>{
    setTasks(tasks.filter(task=> task.id !== id))
  } 
  
  return (
  <div className="App">
    <h1> TASK LIST </h1>
    <ul>
      {tasks.map(({id,name,completed})=> (
        <li key={id}>
          <span>{id} - {name}</span>
          { <button onClick={() => removeTask(id)} className='delete'>Delete</button> }
        </li>
      ))}
    </ul>

  </div>
  );

}

export default App;
