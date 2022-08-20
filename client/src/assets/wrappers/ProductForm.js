import styled from "styled-components";
import greyGradient from "../images/greyGradient.jpg";
import cocktail from "../images/cocktail.jpg";
import wine from "../images/wine.jpg";

const Wrapper = styled.main`
  label {
    letter-spacing: 0.04rem;
  }
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
    border: 4px solid white;
    height: min-content;
    grid-row: 1/2;
    grid-column: 2/3;
    padding: 1rem 0;
    // padding-bottom: 1rem;
    background: white;
  }
  .form {
    height: min-content;
    padding-right: 1.6rem;
    background: rgb(248, 248, 248);
    // background: rgb(238, 238, 238);
  }
  .form-input {
    box-shadow: none;
    border: 4px solid rgb(228, 228, 228);
    border: 4px solid white;
    border-radius: 0;
    font-family: sans-serif;
    font-size: 0.9rem;
    color: rgb(40, 40, 40);
  }
  .form-label {
    margin-bottom: 0.8rem;
  }
  //dynamic rows styling stays where is, intentionally overriding styles
  .dynamic-input {
    border: 4px solid rgb(228, 228, 228);
  }
  .form-row {
    width: 100%;
    margin-top: -1.8rem;
    font-weight: bolder;
    color: rgb(80, 80, 80);
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
    background: white;
    grid-row: 1/2;
    max-height: 236.5px;
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
    // margin-top: 0.1rem;
  }
  .place-holder {
    grid-row: 2/3;
    grid-row: 2/3;
    color: white;
    color: rgb(238, 238, 238);
    color: rgb(248, 248, 248);
    margin-top: -1rem;
  }
  .place-holder-input {
    background: rgb(228, 228, 228);

    background: white;
  }
  .rows-container {
    display: grid;
    gap: 1.8rem;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
  }
  .select-input {
    height: 2.4rem;
  }
  @media (max-width: 800px) {
    .btns {
      flex-direction: column;
      margin: 1rem 0;
      margin-top: 2rem;
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
      padding: 1rem 2rem;
    }
    .form-row {
      width: 100%;
      margin-left: 0;
      margin: 0;
      margin-top: 1rem;
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
  }
`;
export default Wrapper;
