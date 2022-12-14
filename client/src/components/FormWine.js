import Wrapper from "../assets/wrappers/ProductForm";
import FormRow from "./FormRow";
import Alert from "./Alert";
import AddEditBtns from "./AddEditBtns";
import { useAppContext } from "../context/appContext";
// import wineBottle from "../assets/images/wine.jpg";
// import { FaWineGlass, FaWineGlassAlt } from "react-icons/fa";
import { GiWineBottle } from "react-icons/gi";

export default function WineForm({ onClick, onChange, onSubmit }) {
  const { showAlert, wine, alertText, alertType } = useAppContext();
  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        {showAlert && <Alert text={alertText} alertType={alertType} />}
        <div className="rows-container">
          <div className="form-row image-container">
            <GiWineBottle size={160} />
          </div>
          <FormRow
            name="notes"
            labelText="notes"
            onChange={onChange}
            value={wine.notes}
            type="textarea"
            rows={7}
            className="notes"
          />
          <FormRow
            name="name"
            labelText="name"
            onChange={onChange}
            value={wine.name}
            type="text"
            className="name"
          />
          <FormRow
            name="producer"
            labelText="producer"
            onChange={onChange}
            value={wine.producer}
            type="text"
            className="producer"
          />
          <FormRow
            name="region"
            labelText="region"
            onChange={onChange}
            value={wine.region}
            type="text"
            className="region"
          />
          <FormRow
            name="varietal"
            labelText="varietal"
            onChange={onChange}
            value={wine.varietal}
            type="text"
            className="varietal"
          />
          <FormRow
            name="color"
            labelText="color"
            onChange={onChange}
            value={wine.color}
            type="text"
            className="color"
          />
          <FormRow
            name="vintage"
            labelText="vintage"
            onChange={onChange}
            value={wine.vintage}
            type="text"
            className="vintage"
          />
          <FormRow
            name="stock"
            labelText="stock"
            onChange={onChange}
            value={wine.stock ? wine.stock : ""}
            type="text"
            className="stock"
          />
        </div>
        <AddEditBtns onClick={onClick} product={wine} />
      </form>
    </Wrapper>
  );
}
