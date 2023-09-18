import { FC } from "react";

import styles from "./styles.module.css";

interface InputProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: () => void;
}

const Input: FC<InputProps> = ({ placeholder, value, onChange, onKeyDown }) => {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onKeyDown?.();
        }
      }}
    />
  );
};

export default Input;
