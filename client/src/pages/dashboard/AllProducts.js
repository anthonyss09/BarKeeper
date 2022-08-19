import { SearchBar, ProductPreview } from "../../components";
import Wrapper from "../../assets/wrappers/AllProducts";
import { useAppContext } from "../../context/appContext";
import { useEffect } from "react";

export default function AllProducts() {
  const { products, getAllProducts, search, sort, productType } =
    useAppContext();
  useEffect(() => {
    getAllProducts();
    // console.log(products);
  }, [search, sort, productType]);
  return (
    <Wrapper>
      <div className="container-search-bar">
        <SearchBar />
      </div>
      <div className="container-product-previews">
        {products.map((product, index) => {
          return (
            <ProductPreview
              key={index}
              products={products}
              name={product.name}
            />
          );
        })}
      </div>
    </Wrapper>
  );
}
