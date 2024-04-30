import ColorInput from "./ColorInput";
import "./ColorForm.css";

export default function ColorForm({
  onSubmitColor,
  initialData = { role: "some color", hex: "#123456", contrastText: "#ffffff" },
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmitColor(data);
  }

  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <label htmlFor="role">
        Role
        <br />
        <input
          type="text"
          id="role"
          name="role"
          defaultValue={initialData.role}
        />
      </label>
      <br />
      <label htmlFor="hex">
        Hex
        <br />
        <ColorInput id="hex" defaultValue={initialData.hex} />
      </label>
      <br />
      <label htmlFor="contrastText">
        Contrast Text
        <br />
        <ColorInput id="contrastText" defaultValue={initialData.contrastText} />
      </label>
      <br />
      <button>ADD COLOR</button>
    </form>
  );
}

//Falscher ansatz weil zu dumm zum lesen

/*
import "./form.css";
import { useState } from "react";
import { useId } from 'react';

export default function Form() {
  const [hex, setHex] = useState("#123456");
  const [contrast, setContrast] = useState("#ffffff");

  function handleColorChange(event) {
    const { id, value } = event.target;
    id === "Hex" ? setHex(value) : setContrast(value);
  }

  return (
    <form key={useId} className="form-card">
      <label>Role</label>
      <input />
      <label htmlFor="Hex">Hex</label>
      <input  type="text" id="Hex" value={hex} onChange={handleColorChange} />
      <input  type="color" id="Hex" value={hex} onChange={handleColorChange} />
      <label htmlFor="Contrast">Contrast Text</label>
      <input
      
        type="text"
        id="Contrast"
        value={contrast} 
        onChange={handleColorChange}
      />
      <input
      
        type="color"
        id="Contrast"
        value={contrast}
        onChange={handleColorChange}
      />
      <button type="submit">ADD COLOR</button>
    </form>
  );
}
*/