import { initialColors } from "./lib/colors";
import Color from "./Components/Color/color/Color";
import "./App.css";
import ColorForm from "./Components/Color/form/ColorForm";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [colors, setColors] = useState(initialColors);
  const [haveColors, setHaveColors] = useState(true);

  function handleSubmitColor(data) {
    setColors([{ id: uid(), ...data }, ...colors]);
    setHaveColors(true);
  }

  function handleDelete(onFindId) {
    const filteredColors = colors.filter((color) => color.id !== onFindId);
    setColors(filteredColors);
    if (filteredColors.length === 0) {
      setHaveColors(false);
    }
  }


  function handleUpdateColorCard(editColor){
    
    
    setColors(
      colors.map((color) => {
        if (color.id === editColor.id) {
          return editColor;
        }
        return color;
        
      })
    );

  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleSubmitColor} />

      {haveColors ? (
        colors.map((color) => (
          <Color key={color.id} color={color} onIdFromDelete={handleDelete} onUpdateColorCard={handleUpdateColorCard}/>
        ))
      ) : (
        <p>No colors.. start by adding one!</p>
      )}
    </>
  );
}

export default App;
