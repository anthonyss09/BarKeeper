import products from "../utils/products";
import Wrapper from "../assets/wrappers/ProductCards";

export default function ProductCards({ onClick }) {
  return (
    <Wrapper>
      <div className="cards-container">
        {products.map((product) => {
          return (
            <div key={product.id} className="product-card" onClick={onClick}>
              {product.text}
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}
