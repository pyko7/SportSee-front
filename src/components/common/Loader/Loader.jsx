import React from "react";
import "./Loader.css";

/**
 * Represents a loader while data fetching
 * @returns {React.FC}
 */
const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
