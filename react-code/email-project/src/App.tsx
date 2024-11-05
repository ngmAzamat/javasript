import { useState } from "react";
import styles from "./App.module.scss";
import { Eraser, Italic, Underline } from "lucide-react";

function App() {
  return (
    <>
      <div>
        <h1>email project</h1>
        <div className={styles.card}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quos
          aut quidem, atque illo voluptatem adipisci natus eius deserunt enim
          eaque! Perferendis reiciendis ut rem, quaerat vero at pariatur et!
          <div className={styles.action}>
            <div className={styles.tools}>
              <button>
                <Italic></Italic>
              </button>
              <button>
                <Underline></Underline>
              </button>
              <button>
                <Eraser></Eraser>
              </button>
            </div>
            <button>send now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
