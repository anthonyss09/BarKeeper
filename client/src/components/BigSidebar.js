import { NavLinks } from "./index";
import Wrapper from "../assets/wrappers/BigSidebar";
import navLinks from "../utils/navLinks";

export default function BigSidebar() {
  return (
    <Wrapper>
      <div className="sidebar-container">
        <div className="bar-keeper">BarKeeper</div>
        <NavLinks links={navLinks} />
      </div>
    </Wrapper>
  );
}
