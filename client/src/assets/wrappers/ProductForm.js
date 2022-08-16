import styled from "styled-components";
import greyGradient from "../images/greyGradient.jpg";
import cocktail from "../images/cocktail.jpg";
import wine from "../images/wine.jpg";

const Wrapper = styled.main`
  .btns {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 101%;
    margin-top: 1rem;
  }
  .btn-add {
    background: var(--blue-light);
    background: rgb(137, 173, 248);
    color: white;
  }
  .btn-back {
    background: pink;
  }
  .btn-main {
    height: 4rem;
    width: 48%;
    font-size: 1.5rem;
  }
  .dynamic-rows {
    width: 101%;
    box-shadow: none;
    border: 4px solid rgb(238, 238, 238);
    height: min-content;
    grid-row: 1/2;
    grid-column: 2/3;
    // padding: 1rem 0;
    padding-bottom: 1rem;
  }
  .form {
    height: min-content;
    padding-right: 1.6rem;
  }
  .form-input {
    box-shadow: none;
    border: 4px solid rgb(228, 228, 228);
    border-radius: 0;
    font-family: sans-serif;
    font-size: 0.9rem;
    color: rgb(40, 40, 40);
  }
  .form-row {
    width: 100%;
    margin-top: -1.8rem;
  }
  .icon-add-row {
    margin: 0;
  }
  .icon-container {
    width: 92%;
    height: 88%;
    background: white;
    display: grid;
    place-items: center;
    background-image: url(${wine});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .image-container {
    display: grid;
    place-items: center;
    background: rgb(228, 228, 228);
    grid-row: 1/2;
    max-height: 233.79px;
    width: 103.5%;
  }
  .ingredients-input {
    letter-spacing: 0;
  }
  .inspiration-row {
    grid-row: 3/4;
    grid-column: 1/2;
  }
  .instructions-row {
    grid-row: 3/4;
    grid-column: 2/3;
  }
  .name-row {
    grid-row: 2/3;
    grid-column: 1/2;
    margin-top: -1rem;
  }
  .producer-row {
    margin-top: -1rem;
  }
  .notes-row {
    margin-top: 1.2rem;
  }
  .place-holder {
    grid-row: 2/3;
    grid-row: 2/3;
    color: white;
    margin-top: -1rem;
  }
  .place-holder-input {
    background: rgb(228, 228, 228);
  }
  .rows-container {
    display: grid;
    gap: 1.8rem;
    grid-template-columns: 1fr 1fr;
  }
  .select-input {
    height: 2.4rem;
  }
  @media (max-width: 800px) {
    .btns {
      flex-direction: column;
      margin: 1rem 0;
      gap: 1.6rem;
      width: 102.5%;
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
      width: 100%;
      margin-left: 0;
      margin: 0;
    }
    .image-container {
      height: 250px;
      width: 102.5%;
    }
    .rows-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    @media (max-width: 800px) {
      .form {
        padding: 1rem 2rem;
      }
    }
  }
`;
export default Wrapper;
