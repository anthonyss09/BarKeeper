import FormSelect from "./FormSelect";
import Wrapper from "../assets/wrappers/SearchBar";
import { productTypeOptions } from "../utils/options";
import { useAppContext } from "../context/appContext";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  const { setItem, search, productType } = useAppContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem(name, value);
  };

  return (
    <Wrapper>
      <div className="search-bar form">
        <div className="form-row">
          <label className="form-label" htmlFor="search">
            Search
          </label>
          <div className="search-container">
            <FaSearch className="icon-search" />
            <input
              className={"form-input search-input"}
              name="search"
              value={search}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* <FormRow
          name="search"
          labelText="search"
          onChange={handleChange}
          value={search}
        /> */}
        <FormSelect
          labelText="product type"
          name="productType"
          className="product"
          options={productTypeOptions}
          onChange={handleChange}
          value={productType}
        />
        {/* <FormSelect
          lableText="sort"
          name="sort"
          className="sort"
          options={sortOptions}
          onChange={handleChange}
          value={sort}
        /> */}
      </div>
    </Wrapper>
  );
}
