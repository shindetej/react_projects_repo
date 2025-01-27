export const AddTask = ({tasklist, setTasklist}) => {
const handleSubmit= (e) =>{
    e.preventDefault();
    const date = new Date;

    const newTask = {
        id : date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString}`
    }
    setTasklist([...tasklist,newTask]);
    e.target.task.value = ""
}

  return (
    <section class="addTask">
        <form onSubmit={handleSubmit}>
            <input type="text" name="task" autoComplete="off" maxLength="35"/>
            <button type="submit">Add</button>
        </form>
    </section>
  )
}
