import { navbarLinks } from "./utils";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navbarLinks.map((link) => (
          <li key={link.id}>{link.title}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
