import { useRef, useState } from "react";
import "./AddTask.css"

export const AddTask = ({tasks, setTasks}) => {
  //  const[taskValue , setTaskValue] = useState("");
   const[progress, setProgress] = useState(false); 
  const taskRef = useRef("");
 function handleReset(){
    taskRef.current.value= "";
    setProgress(false);
 }

  function onSubmitEvent(event) {
    // hande reloading
    event.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 10000),
      name: taskRef.current.value,
      completed: Boolean(progress)
    };

    setTasks([...tasks,task]);
    handleReset();

  }

  // const handleChange = (event)=>{
  //   setTaskValue(event.target.value)
  // }

  return (
    <section className="addtask">
      <form onSubmit={onSubmitEvent}>
        <input type="text"  name="task" id="task"  placeholder="Enter Your Task" autoComplete="off" ref={taskRef}/>
        <select onChange={(event)=> setProgress(event.target.value)} value={progress}>
            <option value="false">In Progress</option>
            <option value="true">Completed</option>
        </select>

        <span onClick={handleReset} className="reset">Reset</span>
        <button type="submit">Submit Task</button>
      </form>

    </section>
  );
};
