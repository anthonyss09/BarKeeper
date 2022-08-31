import Wrapper from "../assets/wrappers/Landing";
import screenShot from "../assets/images/screenShot.png";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <Wrapper>
      <main className="main-container">
        <img
          role="button"
          name="register"
          src={screenShot}
          className="img-screen-shot"
          alt="screen shot of internal web page"
        />
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
      </main>
    </Wrapper>
  );
}
