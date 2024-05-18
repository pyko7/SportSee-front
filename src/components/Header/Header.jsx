import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

/**
 * @description Represents the header of the page
 * @returns {React.FC}
 */
const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
