import styled from "styled-components";

const Wrapper = styled.aside`
  label {
    font-weight: bolder;
    color: rgb(60, 60, 60);
  }
  span {
    margin-right: 0.4rem;
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
    transform: scale(1.2);
  }
  .icon-subtract:hover {
    transform: scale(1.4);
    opacity: 1;
  }

  @media (max-width: 800px) {
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
