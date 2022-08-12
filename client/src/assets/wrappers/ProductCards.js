import styled from "styled-components";

const Wrapper = styled.aside`
  .cards-container {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: space-evenly;
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
  }
  .product-card:hover {
    transition: var(--transition);
    cursor: pointer;
    transform: scale(1.02);
  }
  @media (max-width: 1000px) {
    .product-card {
      width: 100%;
      height: 200px;
    }
  }
`;
export default Wrapper;
