import { useState } from "react";
import "./App.css";
import colors from "color-name";
import AppForm from "./components/AppForm/AppForm";

function App() {
  return (
    <>
      <AppForm></AppForm>
      <div className="card"></div>
    </>
  );
}

export default App;
