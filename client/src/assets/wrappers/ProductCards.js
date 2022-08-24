import styled from "styled-components";
import cocktails from "../images/cocktails.jpg";

const Wrapper = styled.aside`
  .cards-container {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background: rgb(242, 242, 242);
    padding: 2rem;
  }
  .product-card {
    height: 250px;
    width: 340px;
    // box-shadow: var(--box-shadow);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    text-transform: capitalize;
    background: white;
    font-weight: 400;
    color: rgb(60, 60, 60);
    letter-spacing: 0.1rem;
    // border: 3.5px solid rgb(110, 4, 4);
    // border: 3.5px solid rgb(152, 184, 217);
    // font-family: "Yanone Kaffeesatz", sans-serif;
    font-weight: 600;
    // font-size: 3rem;
  }
  .product-card:hover {
    transition: var(--transition);
    cursor: pointer;
    transform: scale(1.02);
  }

  @media (max-width: 1060px) {
    .product-card {
      width: 100%;
      height: 200px;
    }
  }

  @media (max-width: 880px) {
    .cards-container {
      // background-image: url(${cocktails});
      // background-position: center;
      // background-size: cover;
      // background-repeat: repeat;
      background: transparent;
    }
    .product-card {
      border: 3px solid rgb(80, 80, 80);
    }
  }
`;
export default Wrapper;
