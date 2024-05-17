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

const LineChartContainer = ({ title, data }) => {
  const ticksValue = ["L", "M", "M", "J", "V", "S", "D"];

  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      style={lineChartContainerStyle}
    >
      <span style={lineChartTitleStyle}>{title}</span>

      <LineChart width="100%" height="100%" data={data}>
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey="day"
          type="category"
          tick={xAxisStyle}
          tickFormatter={(val) => getWeekDay(val)}
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