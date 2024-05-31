import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
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
  const [overlayOffset, setOverlayOffset] = React.useState(0);
  const [overlayWidth, setOverlayWidth] = React.useState(0);

  const containerRef = React.useRef(null);

  React.useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.style.backgroundColor = "#ff0000";
  }, [containerRef]);

  const updateOverlay = () => {
    if (!containerRef.current) return;

    const activeDot = document.querySelector(
      ".recharts-layer.recharts-active-dot"
    );

    if (!activeDot) {
      setOverlayOffset(0);
      setOverlayWidth(0);
      return;
    }
    //container's size and its position relative to the viewport
    const containerRect = containerRef.current.getBoundingClientRect();
    //cursor's size and its position relative to the viewport
    const activeDotRect = activeDot.getBoundingClientRect();
    //position of the overlay based on the position of the tooltip
    const offset = activeDotRect.x - containerRect.x;
    //width of the overlay based on the position of the tooltip
    const width = containerRect.width - offset;

    setOverlayOffset(offset);
    setOverlayWidth(width);
  };

  return (
    <div style={{ width: "100%", height: "100%", borderRadius: "0.35rem" }}>
      <ResponsiveContainer
        width="100%"
        height={250}
        style={lineChartContainerStyle}
        ref={containerRef}
      >
        <LineChart width="100%" data={data} onMouseMove={updateOverlay}>
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
          <YAxis
            axisLine={false}
            tickLine={false}
            hide
            dataKey="sessionLength"
          />
          <Tooltip
            contentStyle={{ width: lineChartTooltipStyle.width }}
            itemStyle={{ color: lineChartTooltipStyle.color }}
            labelStyle={{ display: lineChartTooltipStyle.display }}
            formatter={(value, name) => {
              return ["min", value];
            }}
            separator=""
            cursor={
              overlayWidth > 0 && (
                <Rectangle
                  pointerEvents="none"
                  fill="rgba(0,0,0,0.1)"
                  stroke="none"
                  width={overlayWidth}
                  height={containerRef.current.clientHeight}
                  x={overlayOffset}
                  y={0}
                />
              )
            }
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
    </div>
  );
};
export default LineChartContainer;
