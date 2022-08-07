import styled from "styled-components";

const Wrapper = styled.nav`
  .btn-main {
    width: min-content;
  }
  .btn-drop-down {
    background: var(--blue-light);
  }
  .btn-logout {
    width: 100%;
    background: pink;
  }
  .center-text {
    font-size: 1.6rem;
  }
  .drop-btns {
    padding-right: 1rem;
  }

  .icon {
    margin: 0.6rem;
  }
  .icon-bars {
    margin-left: 1rem;
  }
  .icon:hover {
    cursor: pointer;
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
  // @media (max-width: 880px) {
  //   .icon-angles {
  //     display: none;
  //   }
  //   .icon-bars {
  //     display: block;
  //     margin-left: 1rem;
  //   }
  // }
`;

export default Wrapper;
