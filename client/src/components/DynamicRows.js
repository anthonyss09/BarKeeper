import amountSelectOptions from "../utils/amountSelectOptions";
import { useAppContext } from "../context/appContext";
import FormRow from "./FormRow";
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
      <div className="dynamic-rows">
        <label className="form-label" htmlFor="ingredient">
          Ingredients
        </label>
        {ingredients.amount.map((amount, index) => {
          return (
            <div key={index}>
              <div className="dynamic-row">
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
                <div className="form-row icon-add-row">
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
