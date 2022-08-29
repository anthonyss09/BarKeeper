import Wrapper from "../assets/wrappers/Landing";
import notebook from "../assets/images/notebook.jpg";
import negroni from "../assets/images/negroni.jpg";
import cocktails from "../assets/images/cocktails.jpg";
import screenShot from "../assets/images/screenShot.png";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <Wrapper>
      <img src={notebook} className="img-notebook" />
      <img src={screenShot} className="img-screen-shot" />
      <div className="about-container">
        <p className="p-1">
          Keep all your favorite bar recipes.
          <br />
          Easily find and share product notes.
          <br />
          Keep track of inventory.
        </p>
      </div>
      <Link to="/register">
        {" "}
        <button className="btn btn-main">Go register</button>
      </Link>
    </Wrapper>
  );
}
