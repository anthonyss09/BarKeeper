import NavLinks from "./NavLinks";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { CgCloseR } from "react-icons/cg";
import navLinks from "../utils/navLinks";

export default function SmallSidebar({ onClick }) {
  return (
    <Wrapper>
      <div className="center-sidebar">
        <div className="icon-close" onClick={onClick}>
          <CgCloseR size={50} />
        </div>
        <NavLinks links={navLinks} onClick={onClick} />
      </div>
    </Wrapper>
  );
}
