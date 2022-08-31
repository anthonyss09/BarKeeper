import { SearchBar, ProductPreview, ScrollButton } from "../../components";
import Wrapper from "../../assets/wrappers/AllProducts";
import { useAppContext } from "../../context/appContext";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import Spinner from "react-bootstrap/Spinner";

export default function AllProducts() {
  const { products, getAllProducts, search, sort, productType, isLoading } =
    useAppContext();
  useEffect(() => {
    window.scrollTo(0, 0);
    getAllProducts();
    // eslint-disable-next-line
  }, [search, sort, productType]);

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Wrapper>
      <div className="container-search-bar">
        <SearchBar />
      </div>

      <div className="spinner-container">
        {isLoading && <Spinner animation="border" />}
      </div>

      <div
        className={
          products.length <= 2
            ? "container-product-previews justify-center"
            : "container-product-previews"
        }
      >
        {products.length === 0 && <h1>No products to display...</h1>}
        {products.map((product, index) => {
          return (
            <ProductPreview key={index} products={products} product={product} />
          );
        })}
      </div>
      {visible && (
        <div className="scroll-btn-container">
          <ScrollButton />
        </div>
      )}
    </Wrapper>
  );
}
