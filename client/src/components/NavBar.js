import {
  FaAlignLeft,
  FaBars,
  FaUserCircle,
  FaCaretDown,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import Wrapper from "../assets/wrappers/NavBar";
import { useState } from "react";
import { useAppContext } from "../context/appContext";

export default function NavBar({ onClick }) {
  const [showBtn, setShowBtn] = useState(false);
  // const [angleLeft, setAngleLeft] = useState(true);

  const { user, logoutUser } = useAppContext();

  // const handleClick = () => {
  //   setAngleLeft(!angleLeft);
  // };
  return (
    <Wrapper>
      <div className="nav-bar">
        <div className="hamburger nav-item" onClick={onClick}>
          <FaBars size={30} className=" icon icon-bars" />
          {/* {angleLeft ? (
            <FaAngleDoubleLeft
              className="icon icon-angles"
              size={30}
              onClick={handleClick}
            />
          ) : (
            <FaAngleDoubleRight
              className="icon icon-angles"
              size={30}
              onClick={handleClick}
            />
          )} */}
        </div>
        <span className="center-text nav-item">Dashboard</span>
        <div className="drop-btns">
          <button
            className="btn-main btn-drop-down nav-item"
            onClick={() => {
              setShowBtn(!showBtn);
            }}
          >
            <FaUserCircle size={25} className="icon icon-user" />
            {user && user.name}
            <FaCaretDown className="icon icon-caret" />
          </button>
          {showBtn && (
            <button
              className="nav-item btn-main btn-logout"
              onClick={() => {
                logoutUser();
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
