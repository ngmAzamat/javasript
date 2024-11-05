// import { useState } from "react";
import styles from "./style.module.scss";
function Input() {
  return (
    <>
      <input value="Уфа" type="text" />
      <input value="Батуми" type="text" />
      <input className={styles.input} placeholder="туда" type="text" />
      <input className={styles.input} placeholder="обратно" type="text" />
    </>
  );
}

export default Input;
