import styled from "styled-components";

const Wrapper = styled.aside`
  .image-wine {
    width: 100%;
    height: 100%;
  }
  .product-image {
    height: 90px;
    background: rgb(238, 238, 238);
    background: rgb(249, 222, 199);
    background: rgb(244, 223, 205);
    background: rgb(249, 234, 222);
    background: rgb(227, 214, 204);
    background: rgb(246, 232, 222);
    background: rgb(255, 247, 242);
    // background: rgb(255, 240, 230);
    display: grid;
    place-items: center;
  }
  .product-link {
    color: black;
    text-decoration: none;
  }
  .product-name {
    background: white;
    margin-top: 0.6rem;
    // padding: 0.2rem;
    font-size: 0.8rem;
    font-weight: 600;
    text-align: center;
    letter-spacing: 0.04rem;
    font-family: "Yanone Kaffeesatz", sans-serif;
    font-weight: 600;
  }
  .product-preview {
    width: 110px;
    min-height: 152px;
    min-height: 135px;
    // padding: 0.8rem 0.6rem;
    margin: 0;
    border: 2.5px solid rgb(60, 60, 60);
    border: 2.5px solid rgb(100, 100, 100);
    border: 4px solid black;
    border: 3px solid black;
    background: white;
  }
  .product-preview:hover {
    cursor: pointer;
  }
`;
export default Wrapper;
