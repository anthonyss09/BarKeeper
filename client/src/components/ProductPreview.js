import Wrapper from "../assets/wrappers/ProductPreview";
import wine from "../assets/images/wine.jpg";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";

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
        onClick={async () => {
          updateProductFromInventory(product);
          setItem("productType", product.productType);
          setItem(product.productType, { ...product });
          setShowCards(!showCards);
          setIsEditing(true);
        }}
      >
        <div className="product-preview">
          <div className="product-image">
            <img src={wine} className="image-wine" />
          </div>
          <div className="product-name">{product.name}</div>
        </div>
      </Link>
    </Wrapper>
  );
}
