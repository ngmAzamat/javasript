import { useState } from "react";
import styles from "./AppForm.module.scss";

export default function AppForm() {
  return (
    <div class="main">
      <p>преобразование назватия цвета в RGB</p>
      <div></div>
      <input id="text" type="text" />
      <button className={styles.button} type="submit" id="button">
        colorize
      </button>
    </div>
  );
}
