import { NavLinks } from "./index";
import Wrapper from "../assets/wrappers/BigSidebar";
import navLinks from "../utils/navLinks";
import { useAppContext } from "../context/appContext";

export default function BigSidebar() {
  const { setItems } = useAppContext();
  return (
    <Wrapper>
      <div className="sidebar-container">
        <div className="header">
          <div className="bar-keeper">BarKeeper</div>
        </div>

        <NavLinks
          onClick={() => {
            setItems("productType", "All");
          }}
        />
      </div>
    </Wrapper>
  );
}
