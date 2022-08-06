import { Outlet } from "react-router-dom";
import { BigSidebar, NavBar } from "../../components";
import Wrapper from "../../assets/wrappers/SharedLayout";

export default function SharedLayout() {
  return (
    <Wrapper>
      <main className="dashboard">
        <div className="first-column">
          <BigSidebar />
        </div>
        <div className="second-column">
          <div className="nav-bar">
            <NavBar />
          </div>
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
}
