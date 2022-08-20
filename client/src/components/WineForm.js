import Wrapper from "../assets/wrappers/ProductForm";
import FormRow from "./FormRow";
import Alert from "./Alert";
import { useAppContext } from "../context/appContext";
import wineBottle from "../assets/images/wine.jpg";

export default function WineForm({ onClick, onChange, onSubmit }) {
  const { showAlert, wine } = useAppContext();
  return (
    <Wrapper>
      <form class="form" onSubmit={onSubmit}>
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
            value={wine.stock}
            type="text"
            className="stock"
          />
        </div>
        <div className="btns">
          <button className="btn-main btn-add">Add product</button>
          <button type="button" className="btn-main btn-back" onClick={onClick}>
            Back
          </button>
        </div>
      </form>
    </Wrapper>
  );
}
