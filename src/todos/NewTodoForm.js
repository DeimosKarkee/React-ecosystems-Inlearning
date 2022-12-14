import React from "react";
import "./NewTodoForm.css";
import { useState } from "react";
import { connect } from "react-redux";

function NewTodoForm() {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <div className="new-todo-form">
        <input
          className="new-todo-input"
          type="text"
          placeholder="Type your new Todo here."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="new-todo-button">Create Todo</button>
      </div>
    </>
  );
}
export default connect()(NewTodoForm);
