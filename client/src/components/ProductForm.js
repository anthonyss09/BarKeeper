import Wrapper from "../assets/wrappers/ProductForm";
import FormRow from "./FormRow";
import DynamicRows from "./DynamicRows";
import { useAppContext } from "../context/appContext";
import {
  FaGlassWhiskey,
  FaWineGlassAlt,
  FaBeer,
  FaGlassMartiniAlt,
  FaCocktail,
  FaWineBottle,
  FaGlobeEurope,
} from "react-icons/fa";

export default function ProductForm({ productObject, onClick, onChange }) {
  const productItems = Object.keys(productObject);

  const { productType } = useAppContext();

  return (
    <Wrapper>
      <form className="form">
        <div className="rows-container">
          <div
            className={
              productType !== "cocktail"
                ? "image-container image-container-general"
                : "image-container"
            }
          >
            {productType === "beer" && (
              <div className="icon-container">
                <FaBeer size={110} className="icon icon-beer" />
              </div>
            )}
            {productType === "cocktail" && (
              <div className="icon-container icon-cocktail-container">
                <FaGlassMartiniAlt size={120} className="icon icon-cocktail" />
              </div>
            )}
            {productType === "spirit" && (
              <div className="icon-container">
                <FaWineBottle size={100} className="icon icon-spirit" />
              </div>
            )}
            {productType === "wine" && (
              <div className="icon-container">
                <FaWineGlassAlt size={100} className="icon icon-wine" />
              </div>
            )}
          </div>
          {productType === "cocktail" && (
            <div className="form-row place-holder">
              <input className="form-input place-holder-input" />
            </div>
          )}
          {productItems.map((item, index) => {
            return item !== "ingredients" ? (
              <FormRow
                onChange={onChange}
                key={index}
                labelText={item}
                name={item}
                value={productObject.item}
                type={
                  item === "notes" ||
                  item === "inspiration" ||
                  item === "instructions"
                    ? "textarea"
                    : "text"
                }
                rows={item === "notes" ? 7 : 5}
                className={item}
              />
            ) : (
              <DynamicRows key={index} />
            );
          })}
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
