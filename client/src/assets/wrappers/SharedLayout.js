import styled from "styled-components";

const Wrapper = styled.main`
  .dashboard {
    display: flex;
    width: 100vw;
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
`;

export default Wrapper;
