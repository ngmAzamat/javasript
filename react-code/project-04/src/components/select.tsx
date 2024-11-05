// import { useState } from "react";
import styles from "./style.module.scss";
function Select() {
  return (
    <div className={styles.select}>
      <select>
        <option>1 пассажир</option>
        <option>более одного</option>
      </select>
    </div>
  );
}

export default Select;
