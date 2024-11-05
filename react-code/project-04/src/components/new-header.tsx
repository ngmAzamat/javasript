// import { useState } from "react";
import styles from "./style.module.scss";
import { MapPin } from "lucide-react";
function Heads() {
  return (
    <div className={styles.Headers}>
      <button className={styles.heads}>
        <h4>Авиабилеты</h4>
      </button>
      <button className={styles.head}>
        <h4>Отели</h4>
      </button>
      <button className={styles.head}>
        <MapPin />
        Короче
      </button>
    </div>
  );
}

export default Heads;
