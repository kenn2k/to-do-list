import "./App.css";
import NewTodo from "./components/NewTodo";

import ToDo from "./components/ToDo";

function App() {
  return (
    <div className="content">
      <NewTodo />
      <ToDo />
    </div>
  );
}

export default App;
