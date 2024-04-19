import logo from "../../assets/logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="logo" src={logo} alt="" />
    </div>
  );
};

export default Logo;
