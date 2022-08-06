import styled from "styled-components";

const Wrapper = styled.nav`
  .btn-drop-menu {
    background: var(--light-blue);
    margin-right: 1rem;
  }
  .center-text {
    font-size: 1.6rem;
  }
  .hamburger {
    margin-top: 0.4rem;
  }
  .nav-bar {
    display: flex;
    justify-content: space-between;
  }
  .nav-item {
    height: 2rem;
    display: flex;
    place-items: center;
    margin-top: 1rem;
  }
`;

export default Wrapper;
