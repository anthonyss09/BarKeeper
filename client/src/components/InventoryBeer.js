import FormRow from "./FormRow";
import Wrapper from "../assets/wrappers/Inventory";
import { useAppContext } from "../context/appContext";

export default function InventoryBeer({ products }) {
  const { beers, setObjectPair, setInventoryPair, updateProductFromInventory } =
    useAppContext();

  const handleChange = async (ind, e) => {
    const { name, value } = e.target;

    await setInventoryPair("beers", name, value, ind);
    updateProductFromInventory(beers[ind]);
  };
  return (
    <Wrapper>
      <div className="product-title">
        <span className="span-beers">Beers</span>
      </div>

      <div className="form">
        {products.map((product, index) => {
          return (
            <div className="form-row" key={index}>
              <div className="form-input left-input">{product.style}</div>
              <div className="form-input center-input">
                {product.name + ", " + product.producer}
              </div>
              <input
                className="form-input stock-input"
                name="stock"
                value={beers[index].stock}
                onChange={(e) => {
                  handleChange(index, e);
                }}
              />
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}
