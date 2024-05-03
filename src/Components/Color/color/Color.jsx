import ColorForm from "../form/ColorForm";
import "./Color.css";
import { useState } from "react";


export default function Color({ color, onIdFromDelete }) {


  const [deleteMode, setDeleteMode] = useState(false);
  const [editMode, setEditMode] = useState(false);


function handleDelete1(){
  if (deleteMode) {
    onIdFromDelete(color.id);
  } else { 
    setDeleteMode(true);
  }
  }

  function handleEdit1(){
setEditMode(true);
  }




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
      {editMode ? (
        <ColorForm editMode={editMode} />
      ) : (
        deleteMode ? (
          <p className="color-card-hightlight">
            Really delete?
            <button onClick={() => setDeleteMode(false)}>Cancel</button>
            <button onClick={handleDelete1}>Confirm Delete</button>
          </p>
        ) : (
          <>
            <button onClick={handleDelete1}>Delete</button>
            <button onClick={handleEdit1}>Edit</button>
          </>
        )
      )}
    </div>
  )
}