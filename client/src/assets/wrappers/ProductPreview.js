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
    background: rgb(218, 218, 218);
    width: 120px;
    // height: 150px;
    min-height: 152px;
    padding: 0.8rem 0.6rem;
    margin: 0;
    border: 2.5px solid rgb(120, 120, 120);
    border: 2.5px solid black;
    background: white;
    // border: 3px solid rgb(110, 4, 4);
  }
  .product-preview:hover {
    cursor: pointer;
  }
  @media (max-width: 880px) {
    .product-preview {
      background: white;
    }
  }
`;
export default Wrapper;
