import NavLinks from "./NavLinks";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { CgCloseR } from "react-icons/cg";
import navLinks from "../utils/navLinks";
import { useAppContext } from "../context/appContext";

export default function SmallSidebar({ onClick }) {
  const { setItems } = useAppContext();

  return (
    <Wrapper>
      <div className="center-sidebar">
        <div className="icon-close" onClick={onClick}>
          <CgCloseR size={50} />
        </div>
        <NavLinks
          links={navLinks}
          onClick={() => {
            onClick();
            setItems("productType", "All");
            window.scrollTo(0, 0);
          }}
        />
      </div>
    </Wrapper>
  );
}
