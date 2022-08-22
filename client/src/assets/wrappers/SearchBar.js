import styled from "styled-components";

const Wrapper = styled.aside`
  .icon-search {
    // color: rgb(110, 4, 4);
  }
  .form {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    background: rgb(248, 248, 248);
    background: rgb(238, 238, 238);
    // border: 4px solid rgb(166, 8, 8);
    padding: 1.4rem;
    // gap: 1rem;
  }
  .form-input {
    box-shadow: none;
    border-radius: 0;
    border: 4px solid rgb(228, 228, 228);
    border: none;
    width: 100%;
  }
  .form-label {
    letter-spacing: 0.04rem;
    font-weight: bolder;
    color: rgb(80, 80, 80);
    font-size: 0.9rem;
  }
  .form-row {
    width: 48%;
    // margin-right: 2rem;
  }
  .form-select {
    height: 2rem;
    width: 48%;
    border: none;
    width: 100%;
    outline: none;
    text-align: center;
    color: rgb(60, 60, 60);
    font-weight: 600;
    border-radius: 0;
  }
  .form-select:hover {
    cursor: pointer;
  }
  .form-select:focus {
    outline: 0 none;
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
    // gap: 0.4rem;
    align-items: center;
    position: relative;
    border: 2px solid rgb(166, 8, 8);
    border: 2px solid rgb(110, 4, 4);
  }
  .search-bar {
    // padding: 1rem;
    // height: min-content;
    // background: rgb(238, 238, 238);
    // height: 60vh;
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
