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
    margin-top: 1.4rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 1rem;
  }
  .justify-center {
    justify-content: center;
  }
  .spinner-container {
    margin-top: 1rem;
    text-align: center;
  }
  @media (max-width: 400px) {
    .container-product-previews {
      justify-content: space-evenly;
    }
  }
`;
export default Wrapper;
