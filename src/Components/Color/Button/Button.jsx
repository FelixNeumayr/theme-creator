import { useState } from "react";
export function DeleteButton({ onFindId, onIdFromDelete2 }) {
  const [remove, setRemove] = useState(false);

  function handleClick() {
    setRemove(true);
    console.log(remove);
  }

  function handleDecision(event) {
    if (event.target.id === "delete") {
      onIdFromDelete2(onFindId);
    }
    setRemove(false);
  }

  return (
    <div>
      {remove ? (
        <div>
          <p className="color-card-hightlight">Are you sure you want to delete?</p>
          <button id="cancel" onClick={handleDecision}>
            Cancel
          </button>
          <button id="delete" onClick={handleDecision}>
            Delete
          </button>
        </div>
      ) : (
        <div>
          <button onClick={handleClick}>Delete</button>
        </div>
      )}
    </div>
  );
}
