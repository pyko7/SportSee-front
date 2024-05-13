import React from "react";
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
  barChartContainerStyle,
  barChartStyle,
  barChartTitleStyle,
  barStyle,
  legendStyle,
  legendTextStyle,
  tooltipLabelStyle,
  tooltipStyle,
} from "./_style";

const BarChartContainer = ({ title, data }) => {
  return (
    <ResponsiveContainer style={barChartContainerStyle}>
      <span style={barChartTitleStyle}>{title}</span>
      <BarChart
        data={data}
        barGap={barStyle.gap}
        barSize={barStyle.width}
        barCategoryGap={barStyle.barsGap}
        style={barChartStyle}
      >
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
