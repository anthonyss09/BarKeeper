import { NavLinks } from "./index";
import Wrapper from "../assets/wrappers/BigSidebar";

export default function BigSidebar() {
  return (
    <Wrapper>
      <div className="sidebar-container">
        <div className="bar-keeper">BarKeeper</div>
        <NavLinks />
      </div>
    </Wrapper>
  );
}
