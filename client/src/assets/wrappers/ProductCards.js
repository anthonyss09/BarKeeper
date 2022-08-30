import styled from "styled-components";
import cocktails from "../images/cocktails.jpg";

const Wrapper = styled.aside`
  .cards-container {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: space-evenly;
    justify-content: space-between;
    background: rgb(242, 242, 242);
    background: rgb(248, 248, 248);
    margin: 1rem;
  }
  .product-card {
    height: 250px;
    width: 340px;
    width: 46%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    text-transform: capitalize;
    background: white;
    color: rgb(60, 60, 60);
    letter-spacing: 0.1rem;
    font-weight: 600;
    border: 3px solid rgb(80, 80, 80);
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
`;
export default Wrapper;
