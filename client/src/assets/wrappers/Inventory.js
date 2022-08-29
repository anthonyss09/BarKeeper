import styled from "styled-components";

const Wrapper = styled.aside`
  .product-title {
    text-align: center;
    font-size: 2rem;
    font-weight: 300;
    margin-bottom: 1rem;
    font-family: "Yanone Kaffeesatz", sans-serif;
    font-weight: 400;
  }
  .form {
    background: rgb(244, 244, 244);
    margin-top: 0.6rem;
    margin-bottom: 1.6rem;
  }
  .form-row {
    display: flex;
    width: 100%;
  }
  .form-input {
    background: white;
    box-shadow: none;
    border-radius: 0;
    padding: 0.2rem 0 0.2rem 0.6rem;
    // box-shadow: inset 1px 1px 4px rgb(198, 198, 198);
  }
  .center-input {
    text-align: center;
    padding-right: 4rem;
  }
  .left-input {
    width: 20%;
  }
  .stock-input {
    width: 10%;
    max-width: 40px;
    margin-left: 0.4rem;
    flex-grow: 0;
    text-align: center;
    border-radius: 0.2rem;
  }
  .stock-input:focus {
    outline: 2px solid rgb(64, 118, 147);
    box-shadow: 2px 2px 5px rgb(64, 118, 147);
    border-radius: 0.2rem;
  }

  @media (max-width: 880px) {
    .product-title {
      background: white;
      padding: 0 3rem;
      width: min-content;
      opacity: 0.9;
      margin: 0 auto;
    }
  }
`;
export default Wrapper;
