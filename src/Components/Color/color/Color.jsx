import "./Color.css";
import { useState } from "react";

export default function Color({ color }) {
  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      <DeleteButton  />
    </div>
  );
}

export function DeleteButton() {
  const [remove, setRemove] = useState(false);

  function handleClick() {
    setRemove(true);
    console.log(remove);
  }

  


function handleDecision(event){
event.target.id === "cancel" ? setRemove(false) : console.log("wird gelöscht") /* ??? */;
}



  return (
    <div>
      {remove ? (
        <div>
          <p>Are you sure you want to delete?</p>
          <button id="cancel" onClick={handleDecision}>Cancel</button>
          <button id="delete" onClick={handleDecision}>Delete</button>
        </div>
      ) : (
        <div>
          <button onClick={handleClick}>Delete</button>
        </div>
      )}
    </div>
  );
}

//
