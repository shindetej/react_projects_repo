import { useState } from 'react';
import { TaskCard } from './TaskCard';
import { BoxCard } from './BoxCard';

export const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 2121, name: "Learn State Management In React", completed: true },
    { id: 3131, name: "Attend Onboarding Meet", completed: false },
    { id: 4141, name: "Evening Meet Collegues", completed: false },
  ]);

  const [show, setShow] = useState(true);
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <h1> TASK LIST </h1>
      <ul>
        <button className="trigger" onClick={() => setShow(!show)}>
          {show ? "Hide Tasks" : "Show Tasks"}
        </button>
        {show &&
          tasks.map((task) => (
           <TaskCard key={task.id} task={task} handleDelete={handleDelete}/>
          ))}
      </ul>

      <BoxCard result="success">
          <p className="title" >Test Box 1</p>
          <p className="description"> India is my country</p>
      </BoxCard>
      <BoxCard result="warning">
          <p className="title" >Test Box 2</p>
          <p className="description"> Make USA Great Again</p>
          <p className="description"> Lorem ipsum dolor sit amet consectetur adipisicing.?</p>
      </BoxCard>
    </>
  );
};
