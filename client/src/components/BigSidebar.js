import { NavLinks } from "./index";
import Wrapper from "../assets/wrappers/BigSidebar";
import navLinks from "../utils/navLinks";

export default function BigSidebar() {
  return (
    <Wrapper>
      <div className="sidebar-container">
        <div className="header">
          <div className="bar-keeper">BarKeeper</div>
        </div>

        <NavLinks />
      </div>
    </Wrapper>
  );
}
