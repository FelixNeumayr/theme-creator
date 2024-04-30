import React from "react";
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/color/Color";
import "./App.css";
import ColorForm from "./Components/Color/form/ColorForm";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleSubmitColor(data){
    setColors([{id: uid(), ...data}, ...colors]);

  }


  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleSubmitColor}/>
      {colors.map((color) => (
        <Color key={color.id} color={color} />
      ))}
    </>
  );
}

export default App;
