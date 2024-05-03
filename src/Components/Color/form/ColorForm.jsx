import ColorInput from "./ColorInput";
import "./ColorForm.css";

export default function ColorForm({
  onSubmitColor,
  initialData = { role: "", hex: "#123456", contrastText: "#ffffff" },
  editMode,
  setEditMode,
  onUpdateColorCard1,
}) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    

    if (editMode) {
        data.id = initialData.id;
        onUpdateColorCard1(data);
        setEditMode(false);
    } else {

      onSubmitColor(data);
    }
      event.target.reset();
      event.target.elements.role.focus();
  }


  return (
    <>
      <form
        className="color-form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="role">
          Role
          <br />
          <input
            type="text"
            id="role"
            name="role"
            placeholder="e. g."
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
          <ColorInput
            id="contrastText"
            defaultValue={initialData.contrastText}
          />
        </label>
        <br />
        {!editMode ? <button>ADD COLOR</button> : <button>Update</button>}
      </form>
    </>
  );
}
