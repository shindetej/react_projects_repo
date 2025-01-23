import { useState } from "react";
import "./AddTask.css"

export const AddTask = ({tasks, setTasks}) => {
   const[taskValue , setTaskValue] = useState("");
   const[progress, setProgress] = useState(false); 

 function handleReset(){
    setTaskValue("");
    setProgress(false);
 }

  function onSubmitEvent(event) {
    // hande reloading
    event.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 10000),
      name: taskValue,
      completed: Boolean(progress)
    };

    setTasks([...tasks,task]);
    handleReset();

  }

  const handleChange = (event)=>{
    setTaskValue(event.target.value)
  }

  return (
    <section className="addtask">
      <form onSubmit={onSubmitEvent}>
        <input type="text"  name="task" id="task" onChange={handleChange} placeholder="Enter Your Task" autoComplete="off" value={taskValue}/>
        <select onChange={(event)=> setProgress(event.target.value)} value={progress}>
            <option value="false">In Progress</option>
            <option value="true">Completed</option>
        </select>

        <span onClick={handleReset} className="reset">Reset</span>
        <button type="submit">Submit Task</button>
      </form>
      <p>{taskValue}</p>
    </section>
  );
};
