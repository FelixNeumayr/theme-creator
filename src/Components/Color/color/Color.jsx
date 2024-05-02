import "./Color.css";
import { DeleteButton } from "../Button/Button";

export default function Color({ color, onIdFromDelete }) {
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
      <DeleteButton onFindId={color.id} onIdFromDelete2={onIdFromDelete} />
    </div>
  );
}

//
