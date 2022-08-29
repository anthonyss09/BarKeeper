import styled from "styled-components";

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
    color: black;
    padding: 0.8rem;
    text-align: center;
    box-shadow: 2px 2px 8px gray;
    // transform: rotate(-15deg);
    padding: 2rem;
    position: absolute;
    top: 15%;
    top: 10%;
    right: 5%;

    font-weight: bold;
  }
  .btn {
    width: 200px;
    height: 50px;
    position: absolute;
    top: 10%;
    left: 0;
    background: white;
    box-shadow: 2px 2px 8px gray;
    font-weight: bold;
  }
  .img-notebook {
    height: 100vh;
    width: 100%;
    // box-shadow: 2px 2px 8px gray;
  }
  .img-screen-shot {
    height: 400px;
    width: 600px;
    position: absolute;
    right: 15%;
    right: 20%;
    top: 35%;
    top: 30%;
    box-shadow: 2px 2px 8px gray;
    transform: rotate(10deg);
  }
`;
export default Wrapper;
