import { useState } from "react";
import "./App.css";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { TaskList } from "./Components/TaskList";
import { AddTask } from "./Components/AddTask";

function App() {
  // define task field and setTask to update behaviour
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <Header />
      <main>
        <AddTask tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
        <Footer />
      </main>
    </div>
  );
}

export default App;
