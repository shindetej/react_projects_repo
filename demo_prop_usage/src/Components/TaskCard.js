

export const TaskCard = ({task ,handleDelete}) => {
  return (
    <div>
      <li  className={task.completed ? "completed" : "incomplete"}>
      <span>{task.id} - {task.name}</span>
        {
          <button onClick={() => handleDelete(task.id)} className="delete">
            Delete
          </button>
        }
      </li>
    </div>
  );
};
