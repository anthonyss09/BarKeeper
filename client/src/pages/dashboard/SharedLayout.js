import { Outlet } from "react-router-dom";
import {
  BigSidebar,
  NavBar,
  SmallSidebar,
  SmallSideBar,
} from "../../components";
import Wrapper from "../../assets/wrappers/SharedLayout";
import { useState } from "react";

export default function SharedLayout() {
  const [showSidebar, setShowSidebar] = useState(true);

  const handleClick = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <Wrapper>
      <main className="dashboard">
        <div className="first-column">{showSidebar && <BigSidebar />}</div>
        <div className="second-column">
          {!showSidebar && <SmallSidebar onClick={handleClick} />}
          <div className="nav-bar">
            <NavBar onClick={handleClick} />
          </div>
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
}
