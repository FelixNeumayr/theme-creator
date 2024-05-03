import { useState } from "react";

export default function Copy({ hex }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard
      .writeText(hex)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("Fehler beim Kopieren in die Zwischenablage:", error);
      });
  }

  return (
    <button onClick={handleCopy}>
      {copied ? "Successfully copied!" : "Copy"}
    </button>
  );
}
