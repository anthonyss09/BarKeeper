import { Sling as Hamburger } from "hamburger-react";
import Wrapper from "../assets/wrappers/NavBar";

export default function NavBar() {
  return (
    <Wrapper>
      <div className="nav-bar">
        <div className="hamburger">
          <Hamburger />
        </div>
        <span className="center-text nav-item">Dashboard</span>
        <button className="btn-main btn-drop-menu nav-item">
          somebody's name
        </button>
      </div>
    </Wrapper>
  );
}
