import { selectAmountOptions } from "../utils/options";
import { useAppContext } from "../context/appContext";
import FormRow from "./FormRow";
import FormSelect from "./FormSelect";
import Wrapper from "../assets/wrappers/DynamicRows";
import { GrAddCircle, GrSubtractCircle } from "react-icons/gr";

export default function DynamicRows({ onChange }) {
  const {
    cocktail: { ingredients },
    setCocktailIngredients,
    removeCocktailIngredients,
  } = useAppContext();

  return (
    <Wrapper>
      <label className="form-label dynamic-rows-label" htmlFor="ingredient">
        Ingredients
      </label>
      <div className="dynamic-rows">
        {/* <label className="form-label" htmlFor="ingredient">
          Ingredients
        </label> */}
        {ingredients.amount.map((amount, index) => {
          return (
            <div key={index}>
              <div className="dynamic-row">
                {/* <FormSelect
                  className="form-input select-input dynamic-input"
                  value={amount}
                  onChange={(e) => {
                    setCocktailIngredients("amount", e.target.value, index);
                  }}
                  options={selectAmountOptions}
                /> */}
                <select
                  className="form-input select-input dynamic-input"
                  value={amount}
                  onChange={(e) => {
                    setCocktailIngredients("amount", e.target.value, index);
                  }}
                >
                  {selectAmountOptions.map((option, ind) => {
                    return (
                      <option key={ind} defaultValue={option}>
                        {option}
                      </option>
                    );
                  })}
                </select>

                <input
                  type="text"
                  value={ingredients.ingredient[index]}
                  onChange={(e) => {
                    setCocktailIngredients("ingredient", e.target.value, index);
                  }}
                  className="form-input ingredients-input dynamic-input"
                />
                <GrSubtractCircle
                  size={20}
                  className="icon icon-subtract"
                  onClick={() => {
                    if (ingredients.amount.length <= 3) {
                      setCocktailIngredients("amount", "", index);
                      setCocktailIngredients("ingredient", "", index);
                    } else if (ingredients.amount.length > 3) {
                      removeCocktailIngredients("amount", index);
                      removeCocktailIngredients("ingredient", index);
                    }
                  }}
                />
              </div>
              {ingredients.amount.length === index + 1 && (
                <div className="icon-add-row">
                  <GrAddCircle
                    size={25}
                    className="icon icon-add"
                    onClick={() => {
                      setCocktailIngredients("ingredient", "", index + 1);
                      setCocktailIngredients("amount", "0", index + 1);
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}
