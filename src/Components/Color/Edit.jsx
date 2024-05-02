import ColorForm from "./form/ColorForm";
import { useState } from "react";

export default function EditButton() {
  const [editing, setEditing] = useState(false);

  function handleEditClick() {
    setEditing(true);
    console.log(editing);
  }

  return (
    <div>
      {editing ? (
        <div>
          <ColorForm />
        </div>
      ) : (
        <div>
          <button onClick={() => {handleEditClick()}}>Edit</button>
        </div>
      )}
    </div>
  );
}
