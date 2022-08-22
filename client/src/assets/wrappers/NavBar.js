import styled from "styled-components";

const Wrapper = styled.nav`
  .btn-main {
    width: min-content;
  }
  .btn-drop-down {
    background: var(--blue-light);
    background: white;
    // background: rgb(252, 250, 250);
    // padding: 1rem;
    font-size: 1.2rem;
    font-weight: bold;
  }
  .btn-drop-down:hover {
    transform: scale(1);
  }
  .btn-logout {
    width: 100%;
    height: 100%;
    background: pink;
    background: white;
    border: 3px solid black;
    color: black;
    // color: var(--blue-light);
    font-size: 1.1rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
    // background: rgb(80, 80, 80);
    color: white;
    background: rgb(228, 228, 228);
    background: rgb(174, 209, 247);
    padding: 1.2rem;
    background: white;
    color: black;
    color: rgb(70, 70, 70);
    // height: 2rem;
  }
  .btn-logout:hover {
    transform: scale(1);
    // background: rgb(100, 100, 100);
  }
  .center-text {
    font-size: 1.6rem;
    letter-spacing: 0.1rem;
    margin-right: -8rem;
  }
  .drop-btns {
    padding-right: 1rem;
    z-index: 70;
  }

  .icon {
    margin: 0.6rem;
  }
  .icon-bars {
    margin-left: 1rem;
  }
  .icon:hover {
    cursor: pointer;
    z-index: 6;
  }
  // .icon-user {
  //   color: var(--blue-light);
  // }
  .nav-bar {
    display: flex;
    justify-content: space-between;
    z-index: 10;
  }
  .nav-item {
    height: 2.4rem;
    display: flex;
    place-items: center;
    margin-top: 1rem;
  }
  @media (max-width: 880px) {
    .btn-drop-down {
      background: white;
    }
  }
  @media (max-width: 500px) {
    .center-text {
      margin-right: -1rem;
    }
  }
`;

export default Wrapper;
