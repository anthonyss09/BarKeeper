import Wrapper from "../../assets/wrappers/AddProducts";
import { ProductCards } from "../../components/";
import { useState } from "react";
import { useAppContext } from "../../context/appContext";

export default function AddProduct() {
  const [showCards, setShowCards] = useState(true);

  const { setProductItem, product } = useAppContext();

  const handleClick = (e) => {
    const name = e.target.innerHTML;
    setShowCards(!showCards);
    setProductItem("productType", name);
  };
  return (
    <Wrapper>
      {showCards ? (
        <ProductCards onClick={handleClick} />
      ) : (
        <div>
          {product.productType}
          <button className="btn-main btn-back" onClick={handleClick}>
            Back
          </button>
        </div>
      )}
    </Wrapper>
  );
}
