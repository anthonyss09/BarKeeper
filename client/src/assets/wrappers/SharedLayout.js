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
    background: rgb(248, 248, 248);
    background: white;
    height: 100%;
    border-top: 4px solid rgb(248, 248, 248);
    border-left: 4px solid rgb(248, 248, 248);
  }
  .first-column {
    height: 100vh;
    background: white;
    // background: rgb(252, 250, 250);
    // background: rgb(248, 248, 248);
  }
  .nav-bar {
    height: 4.2rem;
    width: 100%;
    background: rgb(252, 250, 250);
    background: white;
    // background: rgb(248, 248, 248);
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
      bacground: white;
      border-left: none;
    }
  }
  @media (max-width: 800px) {
    .dashboard-page {
      padding: 2rem;
      // background: white;
    }
    .nav-bar {
      background: white;
    }
  }
`;

export default Wrapper;
