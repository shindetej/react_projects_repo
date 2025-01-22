

export const TaskCard = ({task ,removeTask}) => {
  return (
    <div>
      <li  className={task.completed ? "completed" : "incomplete"}>
      <span>{task.id} - {task.name}</span>
        {
          <button onClick={() => removeTask(task.id)} className="delete">
            Delete
          </button>
        }
      </li>
    </div>
  );
};
