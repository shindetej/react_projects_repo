import { useState } from "react";
import "./TaskList.css"
import { TaskCard } from "./TaskCard";

export const TaskList = ({ tasks, setTasks }) => {
  // To hide show task list show state used
  const [show, setShow] = useState(true);

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <section className="tasklist">
      <ul>
        <div className='header'>
          <h1> TASK LIST </h1>
          <button className="trigger" onClick={() => setShow(!show)}>
            {show ? "Hide Tasks" : "Show Tasks"}
          </button>
        </div>

        {show &&
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
          ))}
      </ul>
    </section>
  );
};
