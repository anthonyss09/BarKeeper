import Wrapper from "../assets/wrappers/ProductForm";
import FormRow from "./FormRow";
import Alert from "./Alert";
import AddEditBtns from "./AddEditBtns";
import { useAppContext } from "../context/appContext";
import wineBottle from "../assets/images/wine.jpg";

export default function SpiritForm({ onClick, onChange, onSubmit }) {
  const { showAlert, spirit } = useAppContext();
  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        {showAlert && (
          <Alert alertType="success" text="hooooray hooooray hooooray!" />
        )}
        <div className="rows-container">
          <div className="form-row image-container">
            <div className="icon-container">
              {/* <img src={wineBottle} /> */}
            </div>
          </div>
          <FormRow
            name="notes"
            labelText="notes"
            onChange={onChange}
            value={spirit.notes}
            type="textarea"
            rows={7}
            className="notes"
          />
          <FormRow
            name="name"
            labelText="name"
            onChange={onChange}
            value={spirit.name}
            type="text"
            className="name"
          />
          <FormRow
            name="producer"
            labelText="producer"
            onChange={onChange}
            value={spirit.producer}
            type="text"
            className="producer"
          />
          <FormRow
            name="region"
            labelText="region"
            onChange={onChange}
            value={spirit.region}
            type="text"
            className="region"
          />
          <FormRow
            name="type"
            labelText="type"
            onChange={onChange}
            value={spirit.type}
            type="text"
            className="type"
          />
          <FormRow
            name="stock"
            labelText="stock"
            onChange={onChange}
            value={spirit.stock}
            type="text"
            className="stock"
          />
        </div>
        <AddEditBtns onClick={onClick} />
      </form>
    </Wrapper>
  );
}
