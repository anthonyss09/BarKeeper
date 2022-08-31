import styled from "styled-components";
import cocktails from "../images/cocktails.jpg";
import notebook from "../images/notebook.jpg";

const Wrapper = styled.main`
  .dashboard {
    display: flex;
    // width: 100vw;
    transition: var(--transition);
  }
  .dashboard-page {
    background: white;
    min-height: 100vh;
    border-top: 4px solid rgb(248, 248, 248);
    border-left: 4px solid rgb(248, 248, 248);
  }
  .first-column {
    height: 100vh;
    background: white;
    background-image: url(${cocktails});
    // background-image: url(${notebook});
    background-position: center;
    background-size: cover;
  }
  .nav-bar {
    height: 4.6rem;
    width: 100%;
    background: white;
    z-index: 30;
    background-image: url(${cocktails});
    // background-position: bottom;
    background-size: cover;
  }
  .photo-cred {
    color: black;
    font-size: 0.6rem;
    max-width: 200px;
    position: absolute;
    bottom: 1%;
    left: 1%;
  }
  .second-column {
    width: 100%;
  }
  @media (max-width: 880px) {
    .first-column {
      display: none;
    }
  }
`;

export default Wrapper;
