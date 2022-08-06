import links from "../utils/links";
import { NavLink } from "react-router-dom";

export default function NavLinks() {
  return (
    <nav className="nav-links">
      {links.map((link) => {
        return (
          <NavLink
            key={link.id}
            to={link.path}
            className={(isActive) => {
              return isActive ? "nav-link .active" : "nav-link";
            }}
          >
            {link.icon} {link.text}
          </NavLink>
        );
      })}
    </nav>
  );
}
