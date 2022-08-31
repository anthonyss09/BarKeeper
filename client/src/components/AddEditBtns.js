import { useAppContext } from "../context/appContext";

export default function AddEditBtns({ onClick, product }) {
  const { isEditing, clearValues, removeProduct, setIsEditing } =
    useAppContext();
  return (
    <div className="btns">
      <button type="button" className="btn-main btn-back" onClick={onClick}>
        Back
      </button>
      <button className="btn-main btn-add">
        {!isEditing ? "Add product" : "Edit product"}
      </button>
      {isEditing && (
        <button
          className="btn-main btn-delete"
          type="button"
          onClick={() => {
            removeProduct(product);
            clearValues();
            setIsEditing(false);
            window.scrollTo(0, 0);
          }}
        >
          Delete product
        </button>
      )}
    </div>
  );
}
