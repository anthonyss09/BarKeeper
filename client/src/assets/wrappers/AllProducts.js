import styled from "styled-components";

const Wrapper = styled.main`
  h1 {
    text-align: center;
    margin-top: 2rem;
    color: rgb(40, 40, 40);
    font-family: "Yanone Kaffeesatz", sans-serif;
    font-weight: 400;
  }
  .container-product-previews {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 1rem;
    background: white;
    padding: 1.8rem 1rem;
  }
  .justify-center {
    justify-content: center;
  }
  .spinner-container {
    // margin-top: 1rem;
    text-align: center;
  }
  @media (max-width: 400px) {
    .container-product-previews {
      justify-content: space-evenly;
    }
  }
  @media (max-width: 880px) {
    h1 {
      // font-weight: bold;
      font-size: 2rem;
      padding: 1rem;
      opacity: 0.9;
      background: white;
    }
  }
`;
export default Wrapper;
