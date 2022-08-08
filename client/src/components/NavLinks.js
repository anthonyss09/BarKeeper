import { NavLink } from "react-router-dom";

export default function NavLinks({ onClick, links }) {
  if (!links) {
    links = [];
  }
  return (
    <nav className="nav-links">
      {links.map((link) => {
        return (
          <NavLink
            onClick={onClick}
            key={link.id}
            to={link.path}
            className={({ isActive }) =>
              isActive ? " nav-link active" : " nav-link"
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
