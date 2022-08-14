import styled from "styled-components";
import greyGradient from "../images/greyGradient.jpg";

const Wrapper = styled.main`
  .btns {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 1rem;
    margin-top: 0.6rem;
    margin-bottom: 1.6rem;
  }
  .btn-add {
    background: var(--blue-light);
    // box-shadow: var(--box-shadow);
    background: rgb(137, 173, 248);
    color: white;

  }
  .btn-add:hover {
    transform: scale(.98);
  }
  .btn-back {
    background: rgb(253, 160, 171);
    background: pink;
  }
  .btn-back:hover {
    transform: scale(0.98);
    }
  .btn-main {
    height: 4rem;
    width: 48%;
    font-size: 1.5rem;
    margin-top: 0.8rem;
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
  .icon-container {
    width: 92%;
    height: 86%;
    background: white;
    display: grid;
    place-items: center;
    // border-radius: 15%;
  }
  .icon-cocktail-container {
     width: 90%;
    height: 90%;
  }
  .image-container {
    width: 92%;
    height: 100%;
    margin 0.6rem 1rem;
    height: 103%;
    display: grid;
    place-items: center;
    background: rgb(210,210,210);
    grid-row: 1/2;
    // border-radius: 15%;
  }
  .image-container-general {
    height: 200px;
  }
  .dynamic-rows {
    width: 90%;
    margin 0.6rem 1rem;
    height: 100%;
    grid-row: 1;
    grid-column: 2/3;
  }
  .place-holder {
    grid-row: 2/3;
    grid-row: 2/3;
    margin-top: 1.8rem;
  }
  .place-holder-input {
    margin-top: 1.7rem;
    background: rgb(228,228,228);
    // border-left: none;
    // border-right: none;
    // border-top: 1px solid lightGray;
    // border-bottom: 1px solid lightGray;
  }
  .name-row {
    grid-row: 2/3;
    grid-column: 1/2;
    margin-top: 1.2rem;
    margin-top: 2rem;
    // height: 4rem;
  }
  .notes-row {
    margin-top: 1.2rem;
  }
  .instructions-row {
    grid-row: 3/4;
    grid-column: 2/3;
    height: 100%;
    // padding-top: 1.9rem;
  }
  .inspiration-row {
    grid-row: 3/4;
    grid-column: 1/2;
  }
  .producer-row {
    margin-top: 2rem;
  }
  .rows-container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .select-input {
    height: 2.4rem;
  }
  @media (max-width: 800px) {
    .btns {
      flex-direction: column;
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
    }
    .image-container {
       height: 250px;
        width: 100%;
      margin-left: 0;
    }
    .name-row {
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
    // box-shadow: 1px 2px 5px 1px gray;
    // border-radius: 1rem;
    padding: 1rem 2rem;
  }
}
  }
`;
export default Wrapper;
