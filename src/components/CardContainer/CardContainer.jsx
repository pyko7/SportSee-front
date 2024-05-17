import Card from "../Card/Card";
import CaloriesIcon from "../common/Icons/CaloriesIcon";
import ProteinIcon from "../common/Icons/ProteinIcon";
import CarbsIcon from "../common/Icons/CarbsIcon";
import FatIcon from "../common/Icons/FatIcon";
const CardContainer = ({
  calorieCount,
  proteinCount,
  carbohydrateCount,
  lipidCount,
}) => {
  return (
    <>
      <Card title={calorieCount} subtitle="Calories" Icon={CaloriesIcon} />
      <Card title={proteinCount} subtitle="Proteines" Icon={ProteinIcon} />
      <Card title={carbohydrateCount} subtitle="Glucides" Icon={CarbsIcon} />
      <Card title={lipidCount} subtitle="Lipides" Icon={FatIcon} />
    </>
  );
};

export default CardContainer;
