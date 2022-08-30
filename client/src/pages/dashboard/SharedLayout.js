import { Outlet } from "react-router-dom";
import { BigSidebar, NavBar, SmallSidebar } from "../../components";
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
        <div className="first-column">
          {showSidebar && <BigSidebar />}
          <a
            className="photo-cred"
            href="https://www.freepik.com/vectors/etching"
          >
            Etching vector created by rawpixel.com - www.freepik.com
          </a>
        </div>
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
