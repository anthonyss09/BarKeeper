import links from "../utils/links";
import { NavLink } from "react-router-dom";

export default function NavLinks({ onClick }) {
  return (
    <nav className="nav-links">
      {links.map((link) => {
        return (
          <NavLink
            onClick={onClick}
            key={link.id}
            to={link.path}
            className={({ isActive }) =>
              isActive ? "nav-link link active" : "nav-link link"
            }
          >
            <span className="link-item">{link.icon}</span>
            <span className="link-item">{link.text}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}
