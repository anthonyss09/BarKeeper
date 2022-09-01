import Wrapper from "../../assets/wrappers/AddProducts";
import {
  ProductCards,
  FormBeer,
  FormCocktail,
  FormSpirit,
  FormWine,
} from "../../components/";
import { useAppContext } from "../../context/appContext";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
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
    isEditing,
    editProduct,
    setIsEditing,
    clearValues,
  } = useAppContext();

  const navigate = useNavigate();

  const handleClick = (e) => {
    const name = e.target.innerHTML;
    setShowCards(!showCards);
    setIsEditing(false);
    setItem("productType", name);
    clearValues();
    window.scrollTo(0, 0);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setObjectPair(productType, { name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    switch (productType) {
      case "beer":
        if (!beer.name) {
          displayAlert();
          break;
        }
        if (isEditing) {
          editProduct({ ...beer, productType: "beer" });
          break;
        }
        addProduct({ ...beer, productType: "beer" });
        break;
      case "cocktail":
        if (!cocktail.name) {
          displayAlert();
          break;
        }
        if (isEditing) {
          editProduct({ ...cocktail, productType: "cocktail" });
          break;
        }
        addProduct({ ...cocktail, productType: "cocktail" });
        break;
      case "wine":
        if (!wine.name) {
          displayAlert();
          break;
        }
        if (isEditing) {
          editProduct({ ...wine, productType: "wine" });
          break;
        }
        addProduct({ ...wine, productType: "wine" });
        break;
      case "spirit":
        if (!spirit.name) {
          displayAlert();
          break;
        }
        if (isEditing) {
          editProduct({ ...spirit, productType: "spirit" });
          break;
        }
        addProduct({ ...spirit, productType: "spirit" });
        break;
      default:
        return;
    }
    window.scrollTo(0, 0);
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
            <FormBeer
              onClick={handleClick}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          )}
          {productType === "cocktail" && (
            <FormCocktail
              onClick={handleClick}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          )}
          {productType === "spirit" && (
            <FormSpirit
              onClick={handleClick}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          )}
          {productType === "wine" && (
            <FormWine
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
