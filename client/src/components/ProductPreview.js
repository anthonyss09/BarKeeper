import Wrapper from "../assets/wrappers/ProductPreview";
// import wine from "../assets/images/wine.jpg";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
// import { BiBeer } from "react-icons/bi";
import { BiDrink } from "react-icons/bi";
import { GiWaterBottle } from "react-icons/gi";
import { GiWineBottle } from "react-icons/gi";
import { TbBeer } from "react-icons/tb";

export default function ProductPreview({ image, product, name }) {
  const {
    setItem,
    setShowCards,
    showCards,
    setIsEditing,
    updateProductFromInventory,
  } = useAppContext();

  return (
    <Wrapper>
      <Link
        to={`/add-product`}
        className="product-link"
        onClick={() => {
          updateProductFromInventory(product);
          setShowCards(!showCards);
          setItem("productType", product.productType);
          setItem(product.productType, { ...product });

          setIsEditing(true);
        }}
      >
        <div className="product-preview">
          <div className="product-image">
            {/* <img src={wine} className="image-wine" /> */}
            {product.productType === "beer" && <TbBeer size={70} />}
            {product.productType === "cocktail" && <BiDrink size={70} />}
            {product.productType === "spirit" && <GiWaterBottle size={70} />}
            {product.productType === "wine" && <GiWineBottle size={70} />}
          </div>
          <div className="product-name">{product.name}</div>
        </div>
      </Link>
    </Wrapper>
  );
}
