import { FC } from "react";

import styles from "./styles.module.css";

interface FilterBtnProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

const FilterButton: FC<FilterBtnProps> = ({ children, active, onClick }) => {
  return (
    <button
      className={`${styles.button} ${active && styles.active}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default FilterButton;
