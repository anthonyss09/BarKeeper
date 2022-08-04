import styled from "styled-components";

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--grey-50);

  @media (max-width: 900px) {
    flex-direction: column;
  }

  h6 {
    color: var(--grey-200);
    color: black;
    margin-bottom: 0.8rem;
    font-size: 2.2em;
    font-weight: normal;
    margin-top: 0.6rem;
    text-shadow: 1px 1px gray;
  }
  p {
    margin-right: 1rem;
  }
  span {
    color: var(--grey-200);
    font-family: "Fira Sans", sans-serif;
    font-weight: bold;
  }
  span:hover {
    cursor: pointer;
  }
  .bar-keeper {
    font-size: 3.6rem;
    margin: 0 3rem;
    margin-bottom: 1rem;
  }
  .footer-div {
    color: var(--grey-200);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }
  .form {
    max-width: 500px;
    background: white;
  }
  .form-label {
    font-weight: 700;
    color: var(--grey-200);
  }
`;
export default Wrapper;
