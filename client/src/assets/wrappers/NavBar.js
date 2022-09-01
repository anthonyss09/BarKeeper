import styled from "styled-components";

const Wrapper = styled.nav`
  .btn-main {
    width: min-content;
  }
  .btn-drop-down {
    background: var(--blue-light);
    background: white;
    font-size: 1.2rem;
    font-weight: bold;
    border: 2.5px solid black;
    padding: 0.4rem 0;
    white-space: nowrap;
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
    font-size: 1.1rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
    color: white;
    background: rgb(228, 228, 228);
    background: rgb(174, 209, 247);
    background: white;
    color: black;
    color: rgb(70, 70, 70);
  }
  .center-text {
    font-size: 1.6rem;
    letter-spacing: 0.2rem;
    margin-right: -7.8rem;
    font-weight: 600;
    // background: white;
    padding: 0 1rem;
    font-size: 2rem;
  }
  .drop-btns {
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
    padding-right: 1rem;
  }
  .nav-item {
    // min-height: min-content;
    height: 2.8rem;
    display: flex;
    place-items: center;
    margin-top: 1rem;
  }
  @media (max-width: 880px) {
    .btn-drop-down {
      // background: white;
    }
  }
  @media (max-width: 500px) {
    .center-text {
      // margin-right: -4rem;
      display: none;
    }
  }
  // @media (max-width: 400px) {
  //   .center-text {
  //     margin-right: -1.6rem;
  //   }
  // }
`;

export default Wrapper;
