// import { useState } from "react";
import Button from "./components/button";
import styles from "./components/style.module.scss";
import Select from "./components/select";
import Input from "./components/Input";
import Header from "./components/header";
import Heads from "./components/new-header";
function App() {
  return (
    <>
      <Header></Header>

      <Heads></Heads>
      <div className={styles.box}>
        <Input></Input>
        <Select></Select>
      </div>
      <Button></Button>
      <button>
        <p>составить более сложный маршрут</p>
      </button>
    </>
  );
}

export default App;
