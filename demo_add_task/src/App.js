import './App.css';
import {Header} from "./Components/Header";
import {Footer} from "./Components/Footer";
import {TaskList} from "./Components/TaskList";

function App() {
  return (
  <div className="App">
    <Header/>
    <TaskList/>
    <Footer/>
  </div>
  );

}

export default App;
