import { useState } from "react";
import image from "./assets/CAT.png";

import { Details } from "./com/AppForm/AppForm";
import "./App.css";
function App() {
  const [title, setTitle] = useState("Null");
  return (
    <>
      <div className="card">
        <img src={image} width={300} />
        <img src="/CATS.png" width={300}></img>

        <Details title={title} setTitle={setTitle}></Details>
      </div>
    </>
  );
}

export default App;
