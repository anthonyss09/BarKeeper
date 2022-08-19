import Wrapper from "../assets/wrappers/ProductPreview";
import wine from "../assets/images/wine.jpg";

export default function ProductPreview({ image, name }) {
  return (
    <Wrapper>
      <div className="product-preview">
        <div className="product-image">
          <img src={wine} className="image-wine" />
        </div>
        <div className="product-name">{name}</div>
      </div>
    </Wrapper>
  );
}
