import styled from "styled-components";

const Wrapper = styled.main`
  .btns {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 1rem;
    margin-top: 0.6rem;
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
    width: 45%;
    height: 4rem;
    font-size: 1.5rem;
    margin-top: 0.8rem;
  }
  .form {
    height: min-content;
ß  }
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
  .icon {
    // opacity: 0.8;
  }
  .image-container {
    width: 200px;
    width: 100%;
    height: 150px;
    height: 100%;
    margin: 1rem 0 0 1rem;
    display: grid;
    place-items: center;
    background: white;
    grid-row: 1/2;
  }
  .dynamic-rows {
     width: 82%;
    margin-left: 1rem;
    margin-top: 0.6rem;
    // box-shadow: var(--box-shadow);
    padding: 1rem;
   grid-row: 1/2;
   grid-column: 2/3;
  }
  .name-row {
    grid-row: 2/3;
    grid-column: 1/2;
    // height: 4rem;
  
  }
  .instructions-row {
    grid-row: 2/4;
    grid-column: 2/3;
    
  }
  .inspiration-row {
    grid-row: 3/4;
    grid-column: 1/2;
  }
  .rows-container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
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
    .dynamic-rows {
     margin-left: 0;
     width: 95%;
    }
    .form {
      height: 100%;
    }
    .form-row {
      width: 100%;
      margin-left: 0;
    }
    .image-container {
       margin: 0.8rem 0;
       border-radius: 1.6rem;
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
