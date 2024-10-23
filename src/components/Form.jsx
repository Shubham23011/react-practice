import React, { useState } from "react";
import styles from "./form.module.css";

const Form = ({ todos, setTodos }) => {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  };
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          type="text"
          value={todo.name}
          placeholder="Add Task..."
          className={styles.modernInput}
        />
        <button className={styles.modernButton} type="submit">
          ADD
        </button>
      </div>
    </form>
  );
};

export default Form;
