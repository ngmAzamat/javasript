import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styles from "./../styles/style.module.scss";
import Leaner from "../leaner/leaner";
// import styles from "./style.module.scss";
function A() {
  return (
    <BrowserRouter>
      <div className={styles.header}>
        <Link to="/leaner">leaner</Link>
      </div>
      <Routes>
        <Route path="/leaner" element={<Leaner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default A;
