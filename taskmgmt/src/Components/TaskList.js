import { useState } from 'react';

export const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 2121, name: "Learn State Management In React", completed: true },
    { id: 3131, name: "Attend Onboarding Meet", completed: false },
    { id: 4141, name: "Evening Meet Collegues", completed: false },
  ]);

  const [show, setShow] = useState(true);
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <h1> TASK LIST </h1>
      <ul>
        <button className="trigger" onClick={() => setShow(!show)}>
          Toggle Show
        </button>
        {show &&
          tasks.map(({ id, name, completed }) => (
            <li key={id} className={completed ? "completed" : "incomplete"}>
              <span>
                {id} - {name}
              </span>
              {
                <button onClick={() => removeTask(id)} className="delete">
                  Delete
                </button>
              }
            </li>
          ))}
      </ul>
    </>
  );
};
