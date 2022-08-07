import styled from "styled-components";

const Wrapper = styled.aside`
  .center-sidebar {
    width: 96%;
    height: 95%;
    z-index: 2;
    margin: 1rem;
    position: absolute;
    background: white;
    box-shadow: var(--box-shadow);
    display: flex;
    justify-content: center;
  }
  .icon-close {
    position: absolute;
    top: 1rem;
    left: 1rem;
  }
  .icon-close:hover {
    cursor: pointer;
  }
  .link-item {
    margin-right: 2rem;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    font-size: 2rem;
    margin-top: 4rem;
  }
  @media (min-width: 880px) {
    .center-sidebar {
      display: none;
    }
  }
`;
export default Wrapper;
