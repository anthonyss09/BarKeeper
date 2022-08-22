import styled from "styled-components";

const Wrapper = styled.aside`
  .product-title {
    text-align: center;
    font-size: 2rem;
    font-weight: 300;
  }
  .form {
    background: rgb(238, 238, 238);
    margin-top: 0.6rem;
    margin-bottom: 1.6rem;
  }
  .form-row {
    display: flex;
    // justify-content: space-evenly;
    width: 100%;
  }
  .form-input {
    // width: min-content;
    background: white;
    box-shadow: none;
    border-radius: 0;
    // flex-grow: 1;
  }
  .center-input {
    text-align: center;
  }
  .left-input {
    width: 20%;
  }
  .stock-input {
    width: 10%;
    margin-left: 0.4rem;
    flex-grow: 0;
    text-align: center;
  }
`;
export default Wrapper;
