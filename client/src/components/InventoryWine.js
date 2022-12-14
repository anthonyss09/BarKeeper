import Wrapper from "../assets/wrappers/Inventory";
import { useAppContext } from "../context/appContext";

export default function InventorySpirit({ products }) {
  const { wines, updateProductFromInventory, updateValueInArray } =
    useAppContext();

  const handleChange = (ind, e) => {
    const { name, value } = e.target;

    updateValueInArray("wines", ind, name, value);
    updateProductFromInventory(wines[ind]);
  };
  return (
    <Wrapper>
      <div className="product-title">
        <span className="span-wines">Wines</span>
      </div>

      <div className="form">
        {wines.length === 0 && <h3>No wines in stock...</h3>}
        {products.map((product, index) => {
          return (
            <div className="form-row" key={index}>
              <div className="form-input left-input">{product.varietal}</div>
              <div className="form-input center-input">
                {product.producer +
                  ", " +
                  "'" +
                  product.name +
                  "'" +
                  ", " +
                  product.region +
                  ", " +
                  product.vintage}
              </div>
              <input
                className="form-input stock-input"
                name="stock"
                value={wines[index].stock ? wines[index].stock : ""}
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
