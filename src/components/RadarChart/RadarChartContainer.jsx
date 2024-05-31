import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { formatPerformanceData } from "../../utils/utils";

/**
 * @description Represents a radarchart element
 * @param {Object} data data represented in the radarchart
 * @returns {React.FC}
 */
const RadarChartContainer = ({ data }) => {
  const formattedData = formatPerformanceData(data);
  return (
    <ResponsiveContainer style={{ backgroundColor: "#282D30" }}>
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="80%"
        data={formattedData.data}
        style={{ padding: "0.5rem" }}
      >
        <PolarGrid stroke="#FFF" radialLines={false} />
        <PolarAngleAxis
          width="100%"
          dataKey="kind"
          fontSize={12}
          strokeWidth={2}
          tick={{ fill: "#FFF" }}
          tickLine={false}
        />
        <Radar name="Value" dataKey="value" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChartContainer;
