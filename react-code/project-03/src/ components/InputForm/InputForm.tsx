import styles from "./../styles/style.module.scss";
function InputForm() {
  return (
    <div className={styles.inputBox}>
      <input id="name" required type="text" />
      <span>username</span>
      <i></i>
    </div>
  );
}
export default InputForm;
