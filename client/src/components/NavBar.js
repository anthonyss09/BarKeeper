import { FaBars, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Wrapper from "../assets/wrappers/NavBar";
import { useState } from "react";
import { useAppContext } from "../context/appContext";

export default function NavBar({ onClick }) {
  const [showBtn, setShowBtn] = useState(false);

  const { user, logoutUser, setItem } = useAppContext();

  return (
    <Wrapper>
      <div className="nav-bar">
        <div className="hamburger nav-item" onClick={onClick}>
          <FaBars size={25} className=" icon icon-bars" />
        </div>
        <span className="center-text nav-item">Dashboard</span>
        <div className="drop-btns">
          <button
            className="btn btn-main btn-drop-down nav-item"
            onClick={() => {
              setShowBtn(!showBtn);
            }}
          >
            <FaUserCircle size={20} className="icon icon-user" />
            {user && user.name}
            <FaCaretDown className="icon icon-caret" />
          </button>
          {showBtn && (
            <button
              className="nav-item btn btn-main btn-logout"
              onClick={() => {
                logoutUser();
                setItem("productType", "all");
              }}
            >
              logout
            </button>
          )}
        </div>
      </div>
    </Wrapper>
  );
}
