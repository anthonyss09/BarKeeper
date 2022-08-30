import Wrapper from "../assets/wrappers/Inventory";
import { useAppContext } from "../context/appContext";

export default function InventorySpirit({ products }) {
  const { spirits, setInventoryPair, updateProductFromInventory } =
    useAppContext();

  const handleChange = async (ind, e) => {
    const { name, value } = e.target;
    console.log(name, value, ind);
    await setInventoryPair("spirits", name, value, ind);
    updateProductFromInventory(spirits[ind]);
  };
  return (
    <Wrapper>
      <div className="product-title">
        <span className="span-spirits">Spirits</span>
      </div>

      <div className="form">
        {spirits.length === 0 && <h3>No spirits in stock...</h3>}
        {products.map((product, index) => {
          return (
            <div className="form-row" key={index}>
              <div className="form-input left-input">{product.name}</div>
              <div className="form-input center-input">
                {product.producer + ", " + product.region}
              </div>
              <input
                className="form-input stock-input"
                name="stock"
                value={spirits[index].stock}
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
