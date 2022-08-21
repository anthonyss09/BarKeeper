import { useAppContext } from "../context/appContext";

export default function AddEditBtns({ onClick }) {
  const { isEditing } = useAppContext();
  return (
    <div className="btns">
      <button className="btn-main btn-add">
        {!isEditing ? "Add product" : "Edit product"}
      </button>
      <button type="button" className="btn-main btn-back" onClick={onClick}>
        Back
      </button>
    </div>
  );
}
