import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  lineChartContainerStyle,
  lineChartStyle,
  lineChartTitleStyle,
  lineChartTooltipStyle,
  xAxisStyle,
} from "./_style";
import { getWeekDay } from "../../utils/utils";

/**
 * @description Represents a linechart element
 * @param {string} title title of the linechart
 * @param {Object} data data represented in the linechart
 * @returns {React.FC}
 */
const LineChartContainer = ({ title, data }) => {
  return (
    <ResponsiveContainer
      width="100%"
      height={250}
      style={lineChartContainerStyle}
    >
      <LineChart width="100%" data={data}>
        <text
          x="10"
          y="10"
          textAnchor="start"
          dominantBaseline="hanging"
          style={lineChartTitleStyle}
        >
          {title}
        </text>

        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey="day"
          type="category"
          tick={xAxisStyle}
          tickFormatter={(val) => getWeekDay(val)}
          padding={{ left: 7, right: 7 }}
        />
        <YAxis axisLine={false} tickLine={false} hide dataKey="sessionLength" />
        <Tooltip
          contentStyle={{ width: lineChartTooltipStyle.width }}
          itemStyle={{ color: lineChartTooltipStyle.color }}
          labelStyle={{ display: lineChartTooltipStyle.display }}
          formatter={(value, name) => {
            return ["min", value];
          }}
          separator=""
        />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth={2}
          dot={false}
          activeDot={lineChartStyle}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default LineChartContainer;
