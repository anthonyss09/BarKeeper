import styled from "styled-components";

const Wrapper = styled.aside`
  .cards-container {
    display: flex;
    gap: 3rem;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .product-card {
    height: 230px;
    width: 280px;
    box-shadow: var(--box-shadow);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    text-transform: capitalize;
  }
  .product-card:hover {
    transition: var(--transition);
    cursor: pointer;
    transform: scale(1.02);
  }
`;
export default Wrapper;
