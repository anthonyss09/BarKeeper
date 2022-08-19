import styled from "styled-components";

const Wrapper = styled.aside`
  .image-wine {
    width: 100%;
    height: 100%;
  }
  .product-image {
    height: 105px;
  }
  .product-name {
    background: white;
    margin-top: 0.6rem;
    padding: 0.2rem;
    font-size: 0.8rem;
    font-weight: 600;
    text-align: center;
    // font-style: italic;
  }
  .product-preview {
    background: rgb(228, 228, 228);
    width: 120px;
    height: 150px;
    padding: 0.8rem 0.6rem;
    margin: 0;
  }
  .product-preview:hover {
    cursor: pointer;
  }
`;
export default Wrapper;
