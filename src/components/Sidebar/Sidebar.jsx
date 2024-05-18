import YogaIcon from "../common/Icons/YogaIcon";
import CyclingIcon from "../common/Icons/CyclingIcon";
import SwimmingIcon from "../common/Icons/SwimmingIcon";
import BodyBuildingIcon from "../common/Icons/BodyBuildingIcon";
import "./Sidebar.css";

/**
 * @description Represents the sidebar of the page
 * @returns {React.FC}
 */
const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="icons-list">
        <YogaIcon className="icon" />
        <SwimmingIcon className="icon" />
        <CyclingIcon className="icon" />
        <BodyBuildingIcon className="icon" />
      </div>
      <div className="copyright">
        <p>Copyright, SportSee 2020</p>
      </div>
    </nav>
  );
};

export default Sidebar;
