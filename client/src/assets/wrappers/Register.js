import styled from "styled-components";
import cocktails from "../images/cocktails.jpg";
import notebook from "../images/notebook.jpg";

const Wrapper = styled.main`
  h6 {
    color: var(--grey-200);
    color: rgb(65, 65, 65);
    color: rgb(80, 80, 80);
    font-size: 2.2em;
    font-weight: bold;
  }
  img {
    height: 250px;
    width: 350px;
  }
  p {
    margin-right: 1rem;
    margin-top: -0.1rem;
    color: black;
  }
  .alert {
    border-radius: 0;
    width: 72%;
  }
  .bar-keeper {
    font-size: 3.6rem;
    background: white;
    width: min-content;
  }
  .btn-register {
    width: 72%;
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
    background: rgb(250, 250, 250);
    background: rgb(249, 234, 222);
    background: rgb(255, 247, 242);
    color: rgb(40, 40, 40);
    border: 3px solid black;
  }
  .btn-register:hover {
    background: black;
    // background: rgb(152, 184, 217);
    color: rgb(248, 248, 248);
  }
  .container-main {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-image: url(${cocktails});
    background-image: url(${notebook});
    background-position: center;
    background-size: cover;
  }
  .container-center {
    display: flex;
  }
  .footer-div {
    color: var(--grey-200);
    display: flex;
    justify-content: center;
    margin-top: 0.8rem;
  }
  .form {
    max-width: 450px;
    height: min-content;
    background: white;
    min-height: 60vh;
    width: 60vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 2px 2px 8px gray;
    margin-top: 2rem;
    margin-left: 1rem;
  }
  .form-input {
    box-shadow: none;
    border: 2px solid rgb(230, 230, 225);
  }
  .form-label {
    font-weight: 700;
    color: var(--grey-200);
  }
  .form-row {
    margin: 0;
  }
  .section-about {
    display: flex;
    flex-direction: column;
    width: 44%;
    padding-left: 5.2rem;
    margin-top: 2rem;
    display: none;
  }
  .text-about {
    letter-spacing: 0.05rem;
    font-size: 1.4rem;
    background: white;
    color: rgb(95, 95, 95);
    line-height: 2rem;
  }
  .text-enjoy {
    width: min-content;
    // position: absolute;
    background: white;
    // left: 10rem;
    padding: 0 1rem;
  }
  .text-footer {
    font-weight: bold;
  }
  .text-footer:hover {
    cursor: pointer;
  }
  // @media (min-width: 990px) {
  //   .bar-keeper-inner {
  //     display: none;
  //   }
  // }
  @media (max-width: 990px) {
    .form {
      min-width: 60vw;
    }
    .section-about {
      display: none;
    }
  }
  @media (max-width: 800px) {
    .form {
      min-width: 80vw;
    }
  }
`;
export default Wrapper;
