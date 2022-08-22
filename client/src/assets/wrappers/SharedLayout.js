import styled from "styled-components";

const Wrapper = styled.main`
  .dashboard {
    display: flex;
    width: 100vw;
    transition: var(--transition);
  }
  .dashboard-page {
    padding: 2rem;
    background: white;
    height: 100%;
    border-top: 4px solid rgb(248, 248, 248);
    border-left: 4px solid rgb(248, 248, 248);
  }
  .first-column {
    height: 100vh;
    background: white;
  }
  .nav-bar {
    height: 4.2rem;
    width: 100%;
    background: white;
    z-index: 30;
  }
  .second-column {
    width: 100%;
  }
  @media (max-width: 880px) {
    .first-column {
      display: none;
    }
  }
  @media (max-width: 800px) {
    .dashboard-page {
      padding: 0.6rem;
    }
  }
  @media (max-width: 400px) {
    // .dashboard-page {
    //   padding: 0;
    // }
  }
`;

export default Wrapper;
