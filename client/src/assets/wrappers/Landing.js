import styled from "styled-components";
import notebook from "../images/notebook.jpg";

const Wrapper = styled.main`
  h6 {
    margin: 1rem;
    font-weight: bold;
    font-size: 2rem;
  }
  p {
    // width: 500px;
    // font-weight: bold;
    color: rgb(100, 100, 100);
    color: white;
    color: black;
    font-size: 1.4rem;
  }
  .p-1 {
  }
  .about-container {
    width: 80%;
    color: black;
    padding: 0.8rem;
    text-align: center;
    box-shadow: 2px 2px 8px gray;
    position: absolute;
    top: 20%;
    top: 15%;
    right: 5%;
    font-weight: bold;
    z-index: 10;
  }
  .btn {
    width: 200px;
    height: 50px;
    position: absolute;
    top: 5%;
    left: 0.5%;
    background: white;
    box-shadow: 2px 2px 8px gray;
    font-weight: bold;
  }
  .img-notebook {
    height: 100%;
    // box-shadow: 2px 2px 8px gray;
    overflow: hidden;
  }
  .img-screen-shot {
    position: absolute;
    left: 5%;
    top: 45%;
    width: 90vw;
    box-shadow: 2px 2px 8px gray;
    transform: rotate(10deg);
  }
  .main-container {
    height: 100vh;
    background-image: url(${notebook});
    background-position: center;
    background-size: cover;
  }
  @media (min-width: 385px) {
    .img-screen-shot {
      top: 40%;
    }
  }
  @media (min-width: 400px) {
    .img-screen-shot {
      top: 35%;
    }
  }
`;
export default Wrapper;
