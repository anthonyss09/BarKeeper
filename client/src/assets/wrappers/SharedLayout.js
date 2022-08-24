import styled from "styled-components";
import notebook from "../images/cocktails3.jpg";

const Wrapper = styled.main`
  .dashboard {
    display: flex;
    width: 100vw;
    transition: var(--transition);
  }
  .dashboard-page {
    padding: 2rem;
    // background: white;
    background: rgb(248, 248, 248);
    min-height: 100vh;
    border-top: 4px solid rgb(248, 248, 248);
    border-left: 4px solid rgb(248, 248, 248);
  }
  .first-column {
    height: 100vh;
    background: white;
    background-image: url(${notebook});
    background-position: center;
    background-size: cover;
  }
  .nav-bar {
    height: 4.2rem;
    width: 100%;
    background: white;
    z-index: 30;
    background-image: url(${notebook});
    // background-position: center;
    background-size: cover;
  }
  .second-column {
    width: 100%;
  }
  @media (max-width: 600px) {
    .dashboard-page {
      // padding: 0;
    }
  }
  @media (max-width: 880px) {
    .first-column {
      display: none;
    }
  }

  @media (max-width: 880px) {
    .dashboard-page {
      padding: 1rem;
      // padding: 0;
      // background-image: url(${notebook});
      // background-position: center;
      // background-size: cover;
      // bacground-repeat: repeat;
      // height: 100vh;
    }
    .nav-bar {
      // background-image: none;
      background-position: center;
    }
  }
  @media (max-width: 400px) {
    .dashboard-page {
    }
  }
`;

export default Wrapper;
