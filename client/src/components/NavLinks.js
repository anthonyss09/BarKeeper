import { NavLink } from "react-router-dom";
import navLinks from "../utils/navLinks";

export default function NavLinks({ onClick }) {
  return (
    <nav className="nav-links">
      {navLinks.map((link) => {
        return (
          <NavLink
            onClick={onClick}
            key={link.id}
            to={link.path}
            className={({ isActive }) =>
              isActive ? " nav-link active" : " nav-link"
            }
          >
            <span className="link-item link-icon">{link.icon}</span>
            <span className="link-item">{link.text}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}
