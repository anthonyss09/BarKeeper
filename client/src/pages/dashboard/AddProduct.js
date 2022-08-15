import Wrapper from "../../assets/wrappers/AddProducts";
import { ProductCards, ProductForm } from "../../components/";
import { useState } from "react";
import { useAppContext } from "../../context/appContext";

export default function AddProduct() {
  const [showCards, setShowCards] = useState(true);

  const {
    setItem,
    productType,
    beer,
    cocktail,
    wine,
    spirit,
    setObjectPair,
    addProduct,
    displayAlert,
  } = useAppContext();
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

  const handleSubmit = (e) => {
    e.preventDefault();

    switch (productType) {
      case "beer":
        addProduct({ ...beer, productType: "Beer" });
        break;
      case "cocktail":
        addProduct({ ...cocktail, productType: "Cocktail" });
        break;
      case "wine":
        addProduct({ ...wine, productType: "Wine" });
        break;
      case "spirit":
        addProduct({ ...spirit, productType: "Spirit" });
        break;
      default:
        return;
    }
    console.log("submitted");
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
            onSubmit={handleSubmit}
          />
        </div>
      )}
    </Wrapper>
  );
}
