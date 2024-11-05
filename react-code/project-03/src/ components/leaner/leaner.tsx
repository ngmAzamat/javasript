import { useState } from "react";
import InputForm from "../InputForm/InputForm";
import SecondInputForm from "./../secondInpt/second-input";
import styles from "./../styles/style.module.scss";
import { Routes, Route, Link } from "react-router-dom";
function Leaner() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const elements: any = document.getElementById("name");
  // console.log(window.location.pathname);
  return (
    <div className="container">
      <div className={styles.Leader}>
        <Link to="/leaner">leaner</Link>
      </div>
      <Routes>
        <Route path="/leaner" element={<Leaner />} />
      </Routes>
      <div className={styles.box}>
        <form>
          {isLoggedIn ? (
            <>
              {elements.value !== "" ? <h1>привет,</h1> : <h1>привет</h1>}
              {elements.value}
            </>
          ) : (
            <h1></h1>
          )}
          <InputForm></InputForm>
          <SecondInputForm></SecondInputForm>
          {isLoggedIn ? (
            <button
              type="button"
              className={styles.buttons}
              onClick={() => setIsLoggedIn(false)}
            >
              выйти из системы
            </button>
          ) : (
            <button
              type="button"
              className={styles.buttons}
              onClick={() => setIsLoggedIn(true)}
            >
              войти
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
export default Leaner;
