import styled from "styled-components";

const Wrapper = styled.aside`
  h3 {
    text-align: center;
    font-family: "Yanone Kaffeesatz", sans-serif;
    font-weight: 400;
  }
  .product-title {
    text-align: center;
    font-size: 2rem;
    font-weight: 300;
    margin-bottom: 1rem;
    font-family: "Yanone Kaffeesatz", sans-serif;
    font-weight: 400;
  }
  .form {
    background: rgb(238, 238, 238);
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
    outline: 2px solid rgb(110, 4, 4);
    border-radius: 0.2rem;
  }
`;
export default Wrapper;
