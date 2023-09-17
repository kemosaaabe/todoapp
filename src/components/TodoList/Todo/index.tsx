import { FC } from "react";

import styles from "./styles.module.css";

interface TodoProps {
  children: React.ReactNode;
  completed?: boolean;
}

const Todo: FC<TodoProps> = ({ children, completed }) => {
  return (
    <li className={`${styles.todo} ${completed && styles.todoCompleted}`}>
      <div className={`${styles.checkbox} ${completed && styles.checked}`}>
        {completed && <img src="/assets/svg/check.svg" />}
      </div>
      {children}
    </li>
  );
};

export default Todo;
