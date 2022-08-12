import Wrapper from "../../assets/wrappers/AddProducts";
import { ProductCards, ProductForm } from "../../components/";
import { useState } from "react";
import { useAppContext } from "../../context/appContext";

export default function AddProduct() {
  const [showCards, setShowCards] = useState(true);

  const { setItem, productType, beer, cocktail, wine, spirit, setObjectPair } =
    useAppContext();
  const [productObject, setProductObject] = useState({});

  const handleClick = (e) => {
    const name = e.target.innerHTML;
    setShowCards(!showCards);
    setItem("productType", name);

    switch (name) {
      case "beer":
        setProductObject(beer);
        break;
      case "cocktail":
        setProductObject(cocktail);
        break;
      case "wine":
        setProductObject(wine);
        break;
      case "spirit":
        setProductObject(spirit);
        break;
      default:
        setProductObject({});
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setObjectPair(productType, { name, value });
  };
  return (
    <Wrapper>
      {showCards ? (
        <div>
          <ProductCards onClick={handleClick} />
        </div>
      ) : (
        <div>
          <ProductForm
            productObject={productObject}
            onClick={handleClick}
            onChange={handleChange}
          />
        </div>
      )}
    </Wrapper>
  );
}
