import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  barChartTitleStyle,
  barStyle,
  legendStyle,
  legendTextStyle,
  tooltipLabelStyle,
  tooltipStyle,
} from "./_style";

/**
 * @description Represents a barchart element
 * @param {string} title title of the barchart
 * @param {Object} data data represented in the barchart
 * @returns {React.FC}
 */
const BarChartContainer = ({ title, data }) => {
  return (
    <ResponsiveContainer width="100%">
      <BarChart
        data={data}
        barGap={barStyle.gap}
        barSize={barStyle.width}
        barCategoryGap={barStyle.barsGap}
      >
        <text
          x={0}
          y={0}
          textAnchor="start"
          dominantBaseline="hanging"
          style={barChartTitleStyle}
        >
          {title}
        </text>
        <Legend
          iconType="circle"
          iconSize={8}
          align="right"
          verticalAlign="top"
          wrapperStyle={legendStyle}
          formatter={(value) => <span style={legendTextStyle}>{value}</span>}
        />

        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <YAxis
          yAxisId="kilogram"
          type="number"
          orientation="right"
          axisLine={false}
          tickLine={false}
          dataKey="kilogram"
          domain={["dataMin -5", "dataMax + 5"]}
        />

        <YAxis type="number" dataKey="calories" hide />

        <XAxis
          axisLine={false}
          tickLine={false}
          tickMargin={15}
          dataKey="day"
        />

        <Tooltip
          contentStyle={{
            backgroundColor: tooltipStyle.backgroundColor,
            border: tooltipStyle.border,
          }}
          itemStyle={{
            margin: tooltipStyle.margin,
            color: tooltipStyle.color,
          }}
          labelStyle={tooltipLabelStyle}
          formatter={(value, name) => {
            const formattedName = name.includes("kg") ? "kg" : "Kcal";
            return [formattedName, value];
          }}
          separator=""
        />
        <Bar
          radius={barStyle.radius}
          dataKey="kilogram"
          name="Poids (kg)"
          fill={barStyle.color.secondary}
        />
        <Bar
          radius={barStyle.radius}
          dataKey="calories"
          name="Calories brûlées (kCal)"
          fill={barStyle.color.primary}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartContainer;
