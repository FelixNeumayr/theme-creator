import "./Color.css";
import { DeleteButton } from "../Button/Button";
import { useState } from "react";
import ColorForm from "../form/ColorForm";
import EditButton from "../Edit";

export default function Color({ color, onIdFromDelete, editing}) {
  


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
      {!editing ? (
        <>
          <DeleteButton onFindId={color.id} onIdFromDelete2={onIdFromDelete} />
          <EditButton onEditing={editing} />
        </>
      ) : (
        // <EditButton onClick={handleEditClick} />
        <p>test</p>
      )}
    </div>
  );
}

//




{/* <DeleteButton onFindId={color.id} onIdFromDelete2={onIdFromDelete} />
      <EditButton onClick={handleEditClick} /> */}