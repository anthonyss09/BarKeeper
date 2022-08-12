import styled from "styled-components";

const Wrapper = styled.aside`
  .dynamic-row {
    display: flex;
    // margin-bottom: 1.4rem;
    margin-bottom: 0.4rem;
  }
  .dynamic-rows {
    box-shadow: none;
    border: 4px solid rgb(228, 228, 228);
    height: min-content;
  }
  .form-input {
    box-shadow: none;
    border-bottom: 1px solid gray;
    border-radius: 0;
  }
  .ingredients-input {
    width: 60%;
    margin: 0;

    border: 2px solid rgb(228, 228, 228);
  }
  .select-input {
    width: 15%;
    min-width: 50px;
    height: 1.8rem;
    margin-right: 1rem;
    // margin-top: 0.6rem;
    // box-shadow: none;
    // border: 1px solid gray;
    // box-shadow: var(--box-shadow);
    // box-shadow: 1px 1px 2px lightGray;
    border: 2px solid rgb(228, 228, 228);
  }
  @media (max-width: 800px) {
    .dynamic-rows {
      margin-left: 0;
    }
    .form-label {
      margin-left: 0;
    }
    .ingredients-input {
      width: 98%;
    }
  }
`;
export default Wrapper;
