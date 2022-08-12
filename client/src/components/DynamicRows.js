import amountSelectOptions from "../utils/amountSelectOptions";
import { useAppContext } from "../context/appContext";
import FormRow from "./FormRow";
import Wrapper from "../assets/wrappers/DynacmicRows";

export default function DynamicRows({ onChange }) {
  const {
    cocktail: { ingredients },

    setCocktailIngredients,
  } = useAppContext();

  return (
    <Wrapper>
      <div className="dynamic-rows">
        <label className="form-label" htmlFor="ingredient">
          Ingredients
        </label>
        {ingredients.amount.map((amount, index) => {
          return (
            <div className="dynamic-row" key={index}>
              <select
                className="form-input select-input"
                value={amount}
                onChange={(e) => {
                  setCocktailIngredients("amount", e.target.value, index);
                }}
              >
                {amountSelectOptions.map((option, ind) => {
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
                className="form-input ingredients-input"
              />
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}
