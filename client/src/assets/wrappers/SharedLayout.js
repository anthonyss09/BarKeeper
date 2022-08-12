import styled from "styled-components";

const Wrapper = styled.main`
  .dashboard {
    display: flex;
    width: 100vw;
    transition: var(--transition);
  }
  .dashboard-page {
    padding: 2rem;
    //nice light blue color
    background: rgb(248, 252, 260);
    background-color: rgb(239, 239, 241);
    height: 100%;
  }
  .first-column {
    height: 100vh;
    background: white;
    // background: rgb(252, 250, 250);
  }
  .nav-bar {
    height: 4.2rem;
    width: 100%;
    background: rgb(252, 250, 250);
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
    .dashboard-page {
      background-color: rgb(239, 239, 241);
    }
  }
  @media (max-width: 800px) {
    .dashboard-page {
      padding: 2rem;
      // background: rgb(248, 252, 260);
    }
    .nav-bar {
      background: white;
    }
  }
`;

export default Wrapper;
