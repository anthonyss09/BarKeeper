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
    // border: 2.5px solid rgb(64, 118, 147);
    background: rgb(64, 118, 147);
    // opacity: 0.7;
    background: rgb(83, 124, 147);
    background: rgb(92, 123, 141);
    background: rgb(113, 147, 167);
    background: rgb(132, 166, 186);
    background: rgb(174, 209, 247);
    background: rgb(152, 184, 217);
    background: rgb(228, 228, 228);
    background: rgb(228, 228, 228);
    background: white;
  }
  .form-input {
    box-shadow: none;
    border-radius: 0;
    // border: 4px solid rgb(228, 228, 228);
    border: none;
    width: 100%;
  }
  .form-label {
    letter-spacing: 0.04rem;
    font-weight: bolder;
    // color: rgb(80, 80, 80);
    font-size: 0.9rem;
    // color: white;
    margin-top: -0.2rem;
    opacity: 1;
  }
  .form-row {
    width: 48%;
    margin: 0;
    // margin-right: 2rem;
    opacity: 1;
    z-index: 9;
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
    border: 2px solid black;
    height: 2.2rem;
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
    // border: 2px solid rgb(166, 8, 8);
    border: 2px solid black;
    margin-bottom: 1rem;
  }
  .search-bar {
    // padding: 1rem;
    // height: min-content;
    // background: rgb(238, 238, 238);
    // height: 60vh;
    height: min-content;
    border: 3px solid rgb(110, 4, 4);
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
