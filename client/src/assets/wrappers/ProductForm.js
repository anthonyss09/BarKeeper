import styled from "styled-components";
import greyGradient from "../images/greyGradient.jpg";

const Wrapper = styled.main`
  .btns {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0.8rem 0.7rem 1.6rem 1rem;
  }
  .btn-add {
    background: var(--blue-light);
    // box-shadow: var(--box-shadow);
    background: rgb(137, 173, 248);
    color: white;
  }
  .btn-add:hover {
    // transform: scale(.98);
  }
  .btn-back {
    background: rgb(253, 160, 171);
    background: pink;
  }
  .btn-back:hover {
    // transform: scale(0.98);
    }
  .btn-main {
    height: 4rem;
    width: 48%;
    font-size: 1.5rem;
  }
  .dynamic-rows {
    width: 90%;
    margin 0.6rem 1rem;
    box-shadow: none;
    border: 4px solid rgb(228, 228, 228);
    height: min-content;
    grid-row: 1;
    grid-column: 2/3;
  }
  .form {
    height: min-content;
  }
  .form-input {
    box-shadow: none;
    border: 4px solid rgb(228,228,228);
    border-radius: 0;
  }
  .form-row {
    width: 90%;
    margin 0.6rem 1rem;
    height: 100%;
  }
  // .icon-cocktail-container {
  //   width: 90%;
  //   height: 90%;
  // }
  .icon-container {
    width: 92%;
    height: 86%;
    background: white;
    display: grid;
    place-items: center;
  }
  .image-container {
    margin 0.6rem 1rem;
    display: grid;
    place-items: center;
    background: rgb(210,210,210);
    grid-row: 1/2;
    max-height: 250px;
  }
  .inspiration-row {
    grid-row: 3/4;
    grid-column: 1/2;
  }
  .instructions-row {
    grid-row: 3/4;
    grid-column: 2/3;
    height: 100%;
    // padding-top: 1.9rem;
  }
  .name-row {
    grid-row: 2/3;
    grid-column: 1/2;
    margin-top: 1.2rem;
    margin-top: 2rem;
    margin-top: 1rem;
    // height: 4rem;
  }
  .notes-row {
    margin-top: 1.55rem;
  }
  .place-holder {
    grid-row: 2/3;
    grid-row: 2/3;
    margin-top: 1.8rem;
    margin-top: 0.8rem;
  }
  .place-holder-input {
    margin-top: 1.7rem;
    background: rgb(228,228,228);
    // border-left: none;
    // border-right: none;
    // border-top: 1px solid lightGray;
    // border-bottom: 1px solid lightGray;
  }
  .producer-row {
    margin-top: 2rem;
    margin-top: 1rem;
  }
  .rows-container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    // grid-template-rows: 250px;
  }
  .select-input {
    height: 2.4rem;
  }
  @media (max-width: 800px) {
    .btns {
      flex-direction: column;
      margin: 1rem 0;
      gap: 1.4rem;
    }
    .btn-back {
      margin-bottom: 0.8rem;
    }
    .btn-main {
      width: 100%;
    }
    .circle-div {
      width: 95%;
    }
    .dynamic-rows {
      width: 100%;
      margin-left: 0;
    }
    .place-holder {
      display: none;
    }
    .form {
      display: flex;
      flex-direction: column;
    }
    .form-row {
      width: 99%;
      margin-left: 0;
    }
    .image-container {
      height: 250px;
      width: 100%;
      margin-left: 0;
    }
    .name-row {
      margin-top: 1rem;
    }
    .notes-row {
      margin-top: 1rem;
    }
    .producer-row {
      margin-top: 1rem;
    }
    .rows-container {
      display: flex;
      flex-direction: column;
    }
    @media (max-width: 800px) {
      .form {
        padding: 1rem 2rem;
      }
    }
  }
`;
export default Wrapper;
