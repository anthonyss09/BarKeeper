import styled from "styled-components";

const Wrapper = styled.main`
  .dashboard {
    display: flex;
    width: 100vw;
    transition: var(--transition);
  }
  .dashboard-page {
    // height: 100vh;
    padding: 4rem;
    border: 2px solid black;
    margin: 2rem;
  }
  .first-column {
    // width: 18rem;
    height: 100vh;
    background: var(--grey-50);
  }
  .nav-bar {
    height: 4.2rem;
    width: 100%;
    background: var(--grey-50);
  }
  .second-column {
    width: 100%;
  }
  @media (max-width: 880px) {
    .first-column {
      display: none;
    }
    // .small-sidebar {
    //   display: contents;
    //   height: 94%;
    //   width: 95%;
    //   background: white;
    //   position: absolute;
    //   margin: 1.2rem;
    //   display: flex;
    //   box-shadow: var(--box-shadow);
    //   border-radius: 0.2rem;
    //   justify-content: center;
    //   z-index: 2;
    // }
  }
`;

export default Wrapper;
