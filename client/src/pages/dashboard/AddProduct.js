import Wrapper from "../../assets/wrappers/AddProducts";
import {
  ProductCards,
  ProductForm,
  BeerForm,
  CocktailForm,
  SpiritForm,
  WineForm,
} from "../../components/";
import { useState } from "react";
import { useAppContext } from "../../context/appContext";

export default function AddProduct() {
  // const [showCards, setShowCards] = useState(true);

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
    showCards,
    setShowCards,
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
        addProduct({ ...beer, productType: "beer" });
        break;
      case "cocktail":
        addProduct({ ...cocktail, productType: "cocktail" });
        break;
      case "wine":
        addProduct({ ...wine, productType: "wine" });
        break;
      case "spirit":
        addProduct({ ...spirit, productType: "spirit" });
        break;
      default:
        return;
    }
  };

  return (
    <Wrapper>
      {showCards ? (
        <div>
          <ProductCards onClick={handleClick} />
        </div>
      ) : (
        <div>
          {productType === "beer" && (
            <BeerForm
              onClick={handleClick}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          )}
          {productType === "cocktail" && (
            <CocktailForm
              onClick={handleClick}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          )}
          {productType === "spirit" && (
            <SpiritForm
              onClick={handleClick}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          )}
          {productType === "wine" && (
            <WineForm
              onClick={handleClick}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      )}
    </Wrapper>
  );
}
