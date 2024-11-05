import styles from "./../styles/style.module.scss";
function SecondInputForm() {
  return (
    <div className={styles.inputBox}>
      <input id="password" required type="password" />
      <span>password</span>
      <i></i>
    </div>
  );
}
export default SecondInputForm;
