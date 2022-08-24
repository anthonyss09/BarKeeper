import Wrapper from "../../assets/wrappers/AddProducts";
import {
  ProductCards,
  ProductForm,
  BeerForm,
  CocktailForm,
  SpiritForm,
  WineForm,
  displayAlert,
} from "../../components/";
import { useAppContext } from "../../context/appContext";

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

  const handleClick = (e) => {
    const name = e.target.innerHTML;
    setShowCards(!showCards);
    setIsEditing(false);
    setItem("productType", name);
    clearValues();
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
        }
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
