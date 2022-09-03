import Wrapper from "../assets/wrappers/ProductForm";
import FormRow from "./FormRow";
import Alert from "./Alert";
import AddEditBtns from "./AddEditBtns";
import { useAppContext } from "../context/appContext";
import { GiWaterBottle } from "react-icons/gi";

export default function SpiritForm({ onClick, onChange, onSubmit }) {
  const { showAlert, spirit, alertText, alertType } = useAppContext();
  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        {showAlert && <Alert text={alertText} alertType={alertType} />}
        <div className="rows-container">
          <div className="form-row image-container">
            {/* <FaWineBottle size={110} /> */}
            <GiWaterBottle size={150} />
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
            value={spirit.stock ? spirit.stock : ""}
            type="text"
            className="stock"
          />
        </div>
        <AddEditBtns onClick={onClick} product={spirit} />
      </form>
    </Wrapper>
  );
}
