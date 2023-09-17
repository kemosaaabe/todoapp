import { useSelector, useDispatch } from "react-redux";

import Input from "../../ui/Input";
import FilterButton from "../../ui/FilterButton";
import Todo from "./Todo";
import type { RootState } from "../../app/store";

import styles from "./styles.module.css";

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <div className={styles.todolist}>
      <h1 className={styles.title}>Начни свой день продуктивно</h1>
      <div className={styles.field}>
        <Input placeholder="С чего начнем сегодня?" />
      </div>
      <div className={styles.filterBtns}>
        <FilterButton active>Все</FilterButton>
        <FilterButton>Активные</FilterButton>
        <FilterButton>Завершенные</FilterButton>
      </div>
      <ul className={styles.todos}>
        {todos.map((todo) => (
          <Todo completed={todo.completed}>{todo.title}</Todo>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
