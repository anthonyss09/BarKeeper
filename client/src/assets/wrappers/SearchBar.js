import styled from "styled-components";

const Wrapper = styled.aside`
  .form {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1.4rem;
    background: white;
  }
  .form-input {
    box-shadow: none;
    border-radius: 0;
    border: none;
    width: 100%;
  }
  .form-label {
    letter-spacing: 0.04rem;
    font-weight: bolder;
    font-size: 0.9rem;
    margin-top: -0.2rem;
  }
  .form-row {
    width: 48%;
    margin: 0;
  }
  .form-select {
    height: 2rem;
    width: 100%;
    outline: none;
    text-align: center;
    color: rgb(60, 60, 60);
    font-weight: 600;
    border-radius: 0;
    border: 2px solid black;
    height: 2.4rem;
    border: 2px solid rgb(60, 60, 60);
  }
  .form-select:hover {
    cursor: pointer;
  }
  .form-select:focus {
    outline: none;
    box-shadow: none;
  }
  .icon-search {
    height: 1.8rem;
    background: white;
    position: absolute;
    left: 0.4rem;
  }
  .search-container {
    display: flex;
    align-items: center;
    position: relative;
    border: 2px solid rgb(60, 60, 60);
    margin-bottom: 1rem;
    height: 2.4rem;
  }
  .search-bar {
    height: min-content;
    background: rgb(248, 248, 248);

    margin: 1rem;
  }
  .search-input {
    padding-left: 2rem;
    height: 1.84rem;
  }
  @media (max-width: 800px) {
    .form {
      flex-direction: column;
    }
    .form-row {
      width: 100%;
    }
  }
`;

export default Wrapper;
