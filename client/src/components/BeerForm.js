import Wrapper from "../assets/wrappers/ProductForm";
import FormRow from "./FormRow";
import Alert from "./Alert";
import AddEditBtns from "./AddEditBtns";
import { useAppContext } from "../context/appContext";
import { FaBeer } from "react-icons/fa";
import wineBottle from "../assets/images/wine.jpg";

export default function BeerForm({ onClick, onChange, onSubmit }) {
  const { showAlert, beer, isEditing, alertText, alertType } = useAppContext();
  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        {showAlert && <Alert text={alertText} alertType={alertType} />}
        <div className="rows-container">
          <div className="form-row image-container">
            <FaBeer size={100} />
            {/* <div className="icon-container">
              <img src={wineBottle} />
            </div> */}
          </div>
          <FormRow
            name="notes"
            labelText="notes"
            onChange={onChange}
            value={beer.notes}
            type="textarea"
            rows={7}
            className="notes"
          />
          <FormRow
            name="name"
            labelText="name"
            onChange={onChange}
            value={beer.name}
            type="text"
            className="name"
          />
          <FormRow
            name="producer"
            labelText="producer"
            onChange={onChange}
            value={beer.producer}
            type="text"
            className="producer"
          />
          <FormRow
            name="style"
            labelText="style"
            onChange={onChange}
            value={beer.style}
            type="text"
            className="style"
          />
          <FormRow
            name="region"
            labelText="region"
            onChange={onChange}
            value={beer.region}
            type="text"
            className="region"
          />
          <FormRow
            name="abv"
            labelText="abv"
            onChange={onChange}
            value={beer.abv}
            type="text"
            className="abv"
          />
          <FormRow
            name="stock"
            labelText="stock"
            onChange={onChange}
            value={beer.stock}
            type="text"
            className="stock"
          />
        </div>
        <AddEditBtns onClick={onClick} product={beer} />
      </form>
    </Wrapper>
  );
}
