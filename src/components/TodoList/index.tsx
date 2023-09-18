import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Input from "../../ui/Input";
import FilterButton from "../../ui/FilterButton";
import Todo from "./Todo";
import type { RootState } from "../../app/store";
import {
  addTodo,
  completeTodo,
  removeTodo,
} from "../../features/todos/todosSlice";

import styles from "./styles.module.css";

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = React.useState("");
  const [activeBtn, setActiveBtn] = React.useState(1);

  const filterBtns = [
    { id: 1, title: "Все" },
    { id: 2, title: "Активные" },
    { id: 3, title: "Завершенные" },
  ];

  const handleAddTodo = () => {
    if (!newTodo) return;

    setNewTodo("");
    dispatch(addTodo(newTodo));
  };

  const handleToggleTodo = (id: number) => {
    dispatch(completeTodo(id));
  };

  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className={styles.todolist}>
      <h1 className={styles.title}>Начни свой день продуктивно</h1>
      <div className={styles.field}>
        <Input
          placeholder="С чего начнем сегодня?"
          value={newTodo}
          onChange={(e) => setNewTodo(e.currentTarget.value)}
          onKeyDown={handleAddTodo}
        />
      </div>
      {todos.length > 0 && (
        <div className={styles.filterBtns}>
          {filterBtns.map((btn) => (
            <FilterButton
              key={btn.id}
              active={btn.id === activeBtn && true}
              onClick={() => setActiveBtn(btn.id)}
            >
              {btn.title}
            </FilterButton>
          ))}
        </div>
      )}
      <ul className={styles.todos}>
        {todos
          .filter((todo) => {
            switch (activeBtn) {
              case 2:
                return !todo.completed;
              case 3:
                return todo.completed;
              default:
                return todo;
            }
          })
          .map((todo) => (
            <Todo
              key={todo.id}
              completed={todo.completed}
              onTodoClick={() => {
                handleToggleTodo(todo.id);
              }}
              onTodoRemove={() => {
                handleRemoveTodo(todo.id);
              }}
            >
              {todo.title}
            </Todo>
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
