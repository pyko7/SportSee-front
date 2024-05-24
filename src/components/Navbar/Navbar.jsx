import { navbarLinks } from "./utils";
import "./Navbar.css";

/**
 * @description Represents the navbar
 * @returns
 */
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navbarLinks.map((link) => (
          <li key={link.id}>
            <a href="#">{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
