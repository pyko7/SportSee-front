import "./Card.css";
/**
 * @param {string} title Title of the card
 * @param {string} subtitle Subtitle of the card
 * @param {React.ReactNode} Icon Icon the the represented data
 * @returns {React.FC}
 */
const Card = ({ title, subtitle, Icon }) => {
  const suffix = subtitle === "Calories" ? "kCal" : "g";

  return (
    <div className="card-container">
      <Icon />
      <div>
        <div>
          <span className="card-title">
            {title}
            {suffix}
          </span>
        </div>
        <div>
          <span className="card-subtitle">{subtitle}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
