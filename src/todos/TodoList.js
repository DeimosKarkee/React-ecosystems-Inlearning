import React from "react";
import "./TodoList.css";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";

function TodoList({ todos }) {
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.text} />
      ))}
    </div>
  );
}
export default TodoList;
