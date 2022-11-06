import React from "react";
import "./App.css";
import TodoList from "./todos/TodoList";
const todos = [{ text: "My name is deimos" }, { text: "I am from Nepal." }];
function App() {
  return (
    <div className="App">
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
