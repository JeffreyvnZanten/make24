import type { NumberState } from "../../hooks/use24Game";
import styles from "./NumberButton.module.css";

export type NumberButtonProps = {
  state: NumberState;
  isSelected: boolean;
  handleClick: () => void;
};

const NumberButton = ({
  state,
  handleClick,
  isSelected,
}: NumberButtonProps) => {
  console.log("NumberButton");

  if (state.isDisabled) {
    return <div className={`${styles.transparent}`}></div>;
  }

  return (
    <button
      className={`${styles.button} ${isSelected ? `${styles.clicked}` : ""}`}
      onClick={handleClick}
    >
      {state.value}
    </button>
  );
};

export default NumberButton;
