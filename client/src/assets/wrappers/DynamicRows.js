import styled from "styled-components";

const Wrapper = styled.aside`
  label {
    font-weight: bolder;
    color: rgb(60, 60, 60);
  }
  span {
    margin-right: 0.4rem;
  }
  .dynamic-input {
    border: 2px solid rgb(238, 238, 238);
  }
  .dynamic-row {
    display: flex;
    // margin-bottom: 1.4rem;
    // margin-bottom: 0.4rem;
    margin: 0.4rem 1rem 0.4rem 1rem;
  }
  // .form-label {
  //   padding-left: 1.1rem;
  //   margin: 1rem 0;
  // }
  // .form-input {
  //   box-shadow: none;
  //   border-radius: 0;
  // }
  .icon {
    // margin-right: 0.9rem;
  }
  .icon:hover {
    cursor: pointer;
    transform: scale(1.08);
  }
  .icon-add {
    margin-left: 1rem;
  }
  .icon-add-row {
    display: flex;
    justify-content: space-between;
    margin-top: 0.8rem;
  }
  .icon-subtract {
    margin-left: 0.4rem;
    margin-top: 0.4rem;
    opacity: 0.5;
  }
  .icon-subtract:hover {
    transform: scale(1.04);
    opacity: 1;
  }
  .ingredients-input {
    width: 60%;
    margin: 0;
    border: 2px solid rgb(228, 228, 228);
  }
  .select-input {
    width: 25%;
    min-width: 50px;
    min-width: fit-content;
    height: 2rem;
    margin-right: 1rem;
    border: 2px solid rgb(228, 228, 228);
  }
  @media (max-width: 800px) {
    .dynamic-rows {
      // margin-left: 0;
      padding: 1rem 0;
    }
    // .form-label {
    //   margin-left: 0;
    //   margin-left: 1.1rem;
    //   margin: 1rem 0;
    // }
    .icon-add-row {
      align-items: center;
    }
    .icon {
      margin-left: 1.1rem;
      transform: scale(1.2);
    }
    .icon:hover {
      transform: scale(1.3);
    }
    .icon-add {
      margin-top: 0.2rem;
    }
    .icon-subtract {
      transform: scale(1.5);
    }
    .icon-subtract:hover {
      transform: scale(1.7);
    }
    .ingredients-input {
      width: 98%;
    }
  }
`;
export default Wrapper;
