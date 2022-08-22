import styled from "styled-components";

const Wrapper = styled.aside`
  .image-wine {
    width: 100%;
    height: 100%;
  }
  .product-image {
    height: 90px;
  }
  .product-link {
    color: black;
    text-decoration: none;
  }
  .product-name {
    background: white;
    margin-top: 0.6rem;
    padding: 0.2rem;
    font-size: 0.8rem;
    font-weight: 600;
    text-align: center;
    // font-style: italic;
    // letter-spacing: 0;
    letter-spacing: 0.04rem;
    font-family: "Yanone Kaffeesatz", sans-serif;
    font-weight: 600;
  }
  .product-preview {
    background: rgb(228, 228, 228);
    width: 120px;
    // height: 150px;
    min-height: 172px;
    padding: 0.8rem 0.6rem;
    margin: 0;
    border: 2.5px solid rgb(130, 130, 130);
  }
  .product-preview:hover {
    cursor: pointer;
  }
`;
export default Wrapper;
