import { FC } from "react";

import styles from "./styles.module.css";

interface TodoProps {
  children: React.ReactNode;
  completed?: boolean;
  onTodoClick: () => void;
  onTodoRemove: () => void;
}

const Todo: FC<TodoProps> = ({
  children,
  completed,
  onTodoClick,
  onTodoRemove,
}) => {
  return (
    <li
      className={`${styles.todo} ${completed && styles.todoCompleted}`}
      data-testid="todo-element"
    >
      <div className={styles.todoInner} onClick={onTodoClick}>
        <div className={`${styles.checkbox} ${completed && styles.checked}`}>
          {completed && <img src="/assets/svg/check.svg" alt="check" />}
        </div>
        {children}
      </div>
      <img
        onClick={onTodoRemove}
        className={styles.todoRemove}
        src="/assets/svg/remove.svg"
        alt="remove"
        data-testid="remove-btn"
      />
    </li>
  );
};

export default Todo;
