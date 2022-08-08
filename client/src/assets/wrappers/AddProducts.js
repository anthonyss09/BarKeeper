import styled from "styled-components";

const Wrapper = styled.main`
  .nav-links {
    display: flex;
    gap: 3rem;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .nav-link {
    height: 230px;
    width: 280px;
    box-shadow: var(--box-shadow);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    // flex-grow: 1;
    // flex-shrink: 1;
  }
`;
export default Wrapper;
