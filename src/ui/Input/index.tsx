import { FC } from "react";

import styles from "./styles.module.css";

interface InputProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddTodo: () => void;
}

const Input: FC<InputProps> = ({
  placeholder,
  value,
  onChange,
  handleAddTodo,
}) => {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleAddTodo();
        }
      }}
    />
  );
};

export default Input;
