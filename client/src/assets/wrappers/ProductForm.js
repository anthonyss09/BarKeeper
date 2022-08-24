import styled from "styled-components";
import greyGradient from "../images/greyGradient.jpg";
import cocktail from "../images/cocktail.jpg";
import wine from "../images/wine.jpg";
import cocktails from "../images/cocktails.jpg";

const Wrapper = styled.main`
  label {
    letter-spacing: 0.04rem;
    font-family: "Yanone Kaffeesatz", sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    // color: rgb(40, 40, 40);
    color: black;
  }
  .alert {
    margin-top: 1.4rem;
    border-radius: 0;
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
    background: rgb(100, 100, 100);
    background: rgb(64, 118, 147);
    // background: rgb(132, 166, 186);
    // background: rgb(132, 166, 186);
    // border: 2px solid rgb(100, 100, 100);

    color: black;
    // background-image: radial-gradient(rgb(228, 228, 228), rgb(152, 184, 217));
    color: white;
    // border: 4px solid black;
    color: black;
    color: white;
    background: white;
    background: rgb(152, 184, 217);
    font-weight: bold;
    // background-image: url(${cocktails});
    // background-position: center;
    // background-size: cover;
  }
  .btn-back {
    background: pink;
    // background: rgb(166, 8, 8);
    // background: rgb(110, 4, 4);
    color: white;
    color: rgb(80, 80, 80);
    background: white;
    font-weight: bold;
    background: rgb(120, 120, 120);
    color: white;
  }
  .btn-delete {
    margin-top: 1.2rem;
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
    // border: 2px solid rgb(208, 208, 208);
    // height: min-content;
    grid-row: 1/2;
    grid-column: 2/3;
    padding: 1rem 0;
    // margin-top: -0.4rem;
    // padding-bottom: 1rem;
    background: white;
    border: 4px solid rgb(228, 228, 228);
  }
  .dynamic-rows-label {
    margin-top: -0.4rem;
  }
  .form {
    height: min-content;
    padding: 2rem 1.4rem;
    // background: rgb(248, 248, 248);
    // background: rgb(238, 238, 238);
    border: 3px solid rgb(110, 4, 4);
    // border: 3.5px solid rgb(166, 8, 8);
    // background-image: url(${cocktails});
    // background-position: center;
    // background-size: cover;
    padding-top: 0;
    // background: transparent;
  }
  .form-input {
    box-shadow: none;
    border: 4px solid rgb(228, 228, 228);
    // border: 4px solid white;
    // border: 2px solid rgb(208, 208, 208);
    // border: 2px solid gold;
    // border: 2px solid rgb(255, 187, 0);
    // border: 1px solid rgb(255, 170, 0);
    // border: 1px solid black;
    // border: 2.5px solid rgb(80, 80, 80);
    border-radius: 0;
    font-family: sans-serif;
    font-size: 0.9rem;
    color: rgb(40, 40, 40);
    width: 100%;
    padding: 0.8rem;
  }
  .form-label {
    margin-bottom: 0.4rem;
    letter-spacing: 0.05rem;
  }
  //dynamic input styling stays where is, intentionally overriding styles
  .dynamic-input {
    border: 4px solid rgb(228, 228, 228);
    padding: 0;
    padding-left: 0.4rem;
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
  // .icon-container {
  //   // width: 92%;
  //   // height: 88%;
  //   display: grid;
  //   place-items: center;
  //   background-image: url(${wine});
  //   background-position: center;
  //   background-repeat: no-repeat;
  //   background-size: cover;
  // }
  .image-container {
    display: grid;
    place-items: center;
    background: rgb(228, 228, 228);
    background: white;
    // background-image: url(${wine});
    // background-position: center;
    // background-repeat: no-repeat;
    background-size: cover;
    grid-row: 1/2;
    height: 191px;
    max-height: 191px;
    // width: 103.5%;
    border: 4px solid rgb(228, 228, 228);
    margin-top: 0.5rem;
    color: black;
    // border: 2.5px solid rgb(80, 80, 80);
  }
  .image-container-cocktail {
    margin-top: 1.9rem;
    height: 206px;
    max-height: 206px;
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
    margin-top: -1rem;
  }
  .place-holder {
    grid-row: 2/3;
    grid-row: 2/3;
    color: white;
    // color: rgb(238, 238, 238);
    // color: rgb(248, 248, 248);
    margin-top: -1rem;
  }
  .place-holder-input {
    // background: rgb(228, 228, 228);
    background: white;
  }
  .place-holder-label {
    // color: rgb(238, 238, 238);
    color: white;
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
      padding: 2rem 2rem;
      padding-top: 0;
      // background: transparent;
      // border: 4px solid rgb(88, 88, 88);
    }
    .form-input {
      // border: 3px solid rgb(80, 80, 80);
    }
    .form-row {
      width: 100%;
      margin-left: 0;
      margin: 0;
      margin-top: 1rem;
    }
    .image-container {
      height: 250px;
      // width: 102.5%;
      width: 98.5%;
      // border: 4px solid rgb(80, 80, 80);
    }
    .rows-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
  @media (max-width: 500px) {
    .form {
      // border: none;
    }
  }
  @media (max-width: 800px) {
    .image-container {
      margin-top: 0;
    }
  }
`;
export default Wrapper;
