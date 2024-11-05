import { useEffect, useState } from "react";
import InputForm from "./InputForm/InputForm";
import SecondInputForm from "./secondInpt/second-input";
import styles from "./styles/style.module.scss";
import A from "./a/A";
function UserRegistrationForm() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const elements: any = document.getElementById("name");
  const hre = window.location.pathname;
  if (hre === "/leaner") {
    useEffect(() => {
      // document.getElementById("r198").style.display = "none";
      document.body.style.background = "linear-gradient(45deg, #ff00ff, aqua)";
    }, []);
  }
  return (
    <div className="container">
      <A></A>
      <div className={styles.box} id="r198">
        <span className={styles.borderline}></span>
        <form>
          {isLoggedIn ? (
            <>
              {elements.value !== "" ? <h1>привет,</h1> : <h1>привет</h1>}{" "}
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
              className={styles.button}
              onClick={() => setIsLoggedIn(false)}
            >
              выйти из системы
            </button>
          ) : (
            <button
              type="button"
              className={styles.button}
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
export default UserRegistrationForm;
