import { FC } from "react";

import styles from "./styles.module.css";

interface FilterBtnProps {
  children: React.ReactNode;
  active?: boolean;
}

const FilterButton: FC<FilterBtnProps> = ({ children, active }) => {
  return (
    <button
      className={`${styles.button} ${active && styles.active}`}
      type="button"
    >
      {children}
    </button>
  );
};

export default FilterButton;
