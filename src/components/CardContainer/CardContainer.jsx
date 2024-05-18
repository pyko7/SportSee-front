import Card from "../Card/Card";
import CaloriesIcon from "../common/Icons/CaloriesIcon";
import ProteinIcon from "../common/Icons/ProteinIcon";
import CarbsIcon from "../common/Icons/CarbsIcon";
import FatIcon from "../common/Icons/FatIcon";
import "./CardContainer.css";

/**
 * @description Represents a list of cards
 * @param {string} calorieCount amount of calories
 * @param {string} proteinCount amount of proteins
 * @param {string} carbohydrateCount amount of carbs
 * @param {string} lipidCount amount of lipids
 * @returns {React.FC}
 */
const CardContainer = ({
  calorieCount,
  proteinCount,
  carbohydrateCount,
  lipidCount,
}) => {
  return (
    <div className="cards-list">
      <Card title={calorieCount} subtitle="Calories" Icon={CaloriesIcon} />
      <Card title={proteinCount} subtitle="Proteines" Icon={ProteinIcon} />
      <Card title={carbohydrateCount} subtitle="Glucides" Icon={CarbsIcon} />
      <Card title={lipidCount} subtitle="Lipides" Icon={FatIcon} />
    </div>
  );
};

export default CardContainer;
