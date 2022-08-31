import { NavLinks } from "./index";
import Wrapper from "../assets/wrappers/BigSidebar";
import { useAppContext } from "../context/appContext";

export default function BigSidebar() {
  const { setItem, setShowCards } = useAppContext();

  return (
    <Wrapper>
      <div className="sidebar-container">
        <div className="header">
          <div className="bar-keeper">BarKeeper</div>
        </div>

        <NavLinks
          onClick={() => {
            setItem("productType", "all");
            setShowCards(true);
            window.scrollTo(0, 0);
          }}
        />
      </div>
    </Wrapper>
  );
}
