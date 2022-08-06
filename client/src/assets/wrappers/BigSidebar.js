import styled from "styled-components";

const Wrapper = styled.aside`
  .bar-keeper {
    // margin: 2rem 0 0 2rem;
    position: absolute;
    top: 1rem;
    left 1rem;
    font-size: 2rem;
  }
  .nav-link {
    background: var(--link-green-light);
    padding: 1rem 0 1rem 4rem;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    margin-top: 6rem;
    width: 14rem;
  }
`;

export default Wrapper;
