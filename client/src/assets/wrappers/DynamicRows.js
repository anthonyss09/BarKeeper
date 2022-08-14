import styled from "styled-components";

const Wrapper = styled.aside`
  span {
    margin-right: 0.4rem;
  }
  .dynamic-row {
    display: flex;
    margin-bottom: 1.4rem;
    margin-bottom: 0.4rem;
    margin: 0.4rem 1rem 0.4rem 1rem;
  }
  .dynamic-rows {
    box-shadow: none;
    border: 4px solid rgb(228, 228, 228);
    height: min-content;
    height: 100%;
  }
  .form-label {
    padding-left: 1.1rem;
    margin: 1rem 0;
  }
  .form-input {
    box-shadow: none;
    border-bottom: 1px solid gray;
    border-radius: 0;
  }
  .icon {
    margin-right: 0.9rem;
  }
  .icon:hover {
    cursor: pointer;
    transform: scale(1.04);
  }
  .icon-add-row {
    display: flex;
    justify-content: space-between;
    margin-top: 0.8rem;
  }
  .ingredients-input {
    width: 60%;
    margin: 0;
    border: 2px solid rgb(228, 228, 228);
  }
  .select-input {
    width: 25%;
    min-width: 50px;
    height: 1.8rem;
    margin-right: 1rem;
    border: 2px solid rgb(228, 228, 228);
  }
  @media (max-width: 800px) {
    .dynamic-rows {
      margin-left: 0;
      padding: 1rem 0;
    }
    .form-label {
      margin-left: 0;
      margin-left: 1.1rem;
      margin: 1rem 0;
    }
    .icon-add-row {
      align-items: center;
    }
    .icon {
      margin-left: 0.9rem;
    }
    .ingredients-input {
      width: 98%;
    }
  }
`;
export default Wrapper;
