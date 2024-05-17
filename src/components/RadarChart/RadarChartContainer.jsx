import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { formatPerformanceData } from "../../utils/utils";

const RadarChartContainer = ({ data }) => {
  const formattedData = formatPerformanceData(data);
  return (
    <ResponsiveContainer
      width="100%"
      height={250}
      style={{ backgroundColor: "#282D30", borderRadius: "5px" }}
    >
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="80%"
        data={formattedData.data}
        style={{ padding: "0.5rem" }}
      >
        <PolarGrid stroke="#FFF" />
        <PolarAngleAxis width="100%" dataKey="kind" tick={{ fill: "#FFF" }} />
        <Radar name="Value" dataKey="value" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChartContainer;
