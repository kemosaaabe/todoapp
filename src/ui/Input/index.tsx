import { FC } from "react";

import styles from "./styles.module.css";

interface InputProps {
  placeholder?: string;
}

const Input: FC<InputProps> = ({ placeholder }) => {
  return (
    <input className={styles.input} type="text" placeholder={placeholder} />
  );
};

export default Input;
