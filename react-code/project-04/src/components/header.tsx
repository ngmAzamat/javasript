// import { useState } from "react";
import { Globe } from "lucide-react";
import { Heart } from "lucide-react";
import styles from "./style.module.scss";
function Heads() {
  return (
    <div className={styles.Header}>
      <button className={styles.HeadButton}>
        <Heart />
      </button>
      <button className={styles.HeadButton}>
        <Globe />
      </button>
    </div>
  );
}

export default Heads;
