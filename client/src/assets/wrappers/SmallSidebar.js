import styled from "styled-components";

const Wrapper = styled.aside`
  .center-sidebar {
    width: 96%;
    height: 96%;
    z-index: 2;
    margin: 2%;
    position: absolute;
    background: white;
    box-shadow: var(--box-shadow);
    box-shadow: 1px 2px 5px 1px gray;
    display: flex;
    justify-content: center;
    z-index: 100;
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
  .nav-link {
    margin-top: 2rem;
  }
  .nav-link:hover {
    transform: scale(1.02);
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
