import styled from "styled-components";
import cocktails from "../images/cocktails3.jpg";
import cocktailColor from "../images/cocktailColor.jpg";

const Wrapper = styled.main`
  label {
    letter-spacing: 0.04rem;
    font-family: "Yanone Kaffeesatz", sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
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
    color: black;
    color: white;
    background: rgb(152, 184, 217);
    font-weight: bold;
  }
  .btn-back {
    font-weight: bold;
    background: rgb(90, 90, 90);
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
    grid-row: 1/2;
    grid-column: 2/3;
    padding: 1rem 0;
    background: white;
    border: 4px solid rgb(228, 228, 228);
    border: 2px solid rgb(228, 228, 228);
  }
  .dynamic-rows-label {
    margin-top: -0.4rem;
  }
  .dynamic-row {
    display: flex;
    margin: 0.4rem 1rem 0.4rem 1rem;
  }

  .form {
    height: min-content;
    padding: 2rem 1.4rem;
    padding-top: 0;
  }
  .form-input {
    box-shadow: none;
    border-radius: 0;
    font-family: sans-serif;
    font-size: 0.9rem;
    color: rgb(40, 40, 40);
    width: 100%;
    padding: 0.8rem;
    border: 2px solid rgb(228, 228, 228);
  }
  .form-label {
    margin-bottom: 0.4rem;
    letter-spacing: 0.05rem;
  }

  //dynamic input styling stays where is, intentionally overriding styles
  .dynamic-input {
    padding: 0;
    padding-left: 0.4rem;
    border: 2px solid rgb(228, 228, 228);
  }

  .form-row {
    width: 100%;
    margin-top: -1.8rem;
    font-weight: bolder;
    color: rgb(80, 80, 80);
  }
  .image-container {
    display: grid;
    place-items: center;
    background: rgb(228, 228, 228);
    background: rgb(249, 234, 222);
    grid-row: 1/2;
    height: 205px;
    max-height: 205px;
    margin-top: 1.2rem;
    color: black;
  }
  .image-container-cocktail {
    margin-top: 1.9rem;
    height: 193px;
    max-height: 188px;
    background: rgb(228, 228, 228);
    background: rgb(255, 247, 242);
    background: rgb(249, 234, 222);
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
    margin-top: -1rem;
  }
  .place-holder-input {
    background: white;
  }
  .place-holder-label {
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
    width: 25%;
    min-width: 50px;
    min-width: fit-content;
    height: 2rem;
    margin-right: 1rem;
    box-shadow: none;
    border: 2px solid rgb(228, 228, 228);
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
    .dynamic-input {
      margin-bottom: 0.3rem;
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
    }
    .form-row {
      width: 100%;
      margin-left: 0;
      margin: 0;
      margin-top: 1rem;
    }
    .image-container {
      height: 250px;
      width: 98.5%;
    }
    .rows-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
  @media (max-width: 800px) {
    .image-container {
      margin-top: 0;
    }
  }
`;
export default Wrapper;
