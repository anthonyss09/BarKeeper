import Wrapper from "../assets/wrappers/ProductForm";
import FormRow from "./FormRow";
import Alert from "./Alert";
import AddEditBtns from "./AddEditBtns";
import DynamicRows from "./DynamicRows";
import { useAppContext } from "../context/appContext";
import wineBottle from "../assets/images/wine.jpg";
import { FaGlassMartiniAlt } from "react-icons/fa";

export default function CocktailForm({ onClick, onChange, onSubmit }) {
  const { showAlert, cocktail } = useAppContext();
  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        {showAlert && (
          <Alert alertType="success" text="hooooray hooooray hooooray!" />
        )}
        <div className="rows-container">
          <div className="form-row image-container image-container-cocktail">
            <FaGlassMartiniAlt size={110} />
            {/* <div className="icon-container">
              <img src={wineBottle} />
            </div> */}
          </div>
          <div className="form-row place-holder">
            <label className="form-label place-holder-label">
              hold my place
            </label>
            <input className="form-input place-holder-input" />
          </div>
          <FormRow
            name="name"
            labelText="name"
            onChange={onChange}
            value={cocktail.name}
            type="text"
            className="name"
          />
          <DynamicRows />
          <FormRow
            name="instructions"
            labelText="instructions"
            onChange={onChange}
            value={cocktail.instructions}
            type="textarea"
            rows={5}
            className="instructions"
          />
          <FormRow
            name="inspiration"
            labelText="inspiration"
            onChange={onChange}
            value={cocktail.inspiration}
            type="textarea"
            rows={5}
            className="inspiration"
          />
        </div>
        <AddEditBtns onClick={onClick} product={cocktail} />
      </form>
    </Wrapper>
  );
}
