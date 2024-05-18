import { CardContainer, CardTitle, CardSubtitle } from "./_styles";

/**
 * @param {string} title Title of the card
 * @param {string} subtitle Subtitle of the card
 * @param {React.ReactNode} Icon Icon the the represented data
 * @returns {React.FC}
 */
const Card = ({ title, subtitle, Icon }) => {
  const suffix = subtitle === "Calories" ? "kCal" : "g";

  return (
    <div style={CardContainer}>
      <Icon />
      <div>
        <div>
          <span style={CardTitle}>
            {title}
            {suffix}
          </span>
        </div>
        <div>
          <span style={CardSubtitle}>{subtitle}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
