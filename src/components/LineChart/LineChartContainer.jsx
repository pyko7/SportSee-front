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
  const gradientRef = React.useRef(null);

  const titleFirstPart = title.split(" ").slice(0, 3).join(" ");
  const titleSecondPart = title.split(" ").slice(3).join(" ");

  //update the gradient stops directly by accessing the children of the gradientRef
  const updateOverlay = () => {
    if (!containerRef.current || !gradientRef.current) return;

    const activeDot = document.querySelector(
      ".recharts-layer.recharts-active-dot"
    );

    if (!activeDot) {
      resetOverlay();
      return;
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    const activeDotRect = activeDot.getBoundingClientRect();
    const offset = activeDotRect.x - containerRect.x;
    const width = containerRect.width - offset;

    setOverlayOffset(offset);
    setOverlayWidth(width);

    const stop1 = gradientRef.current.children[0];
    const stop2 = gradientRef.current.children[1];

    const offsetPercent = (offset / containerRef.current.clientWidth) * 100;

    stop1.setAttribute("offset", `${offsetPercent}%`);
    stop1.setAttribute("stop-color", "rgba(255,255,255,0.5)");
    stop2.setAttribute("offset", `${offsetPercent}%`);
    stop2.setAttribute("stop-color", "rgba(255,255,255,1)");
  };

  //reset the gradient stops to their initial state when the mouse leaves the chart area
  const resetOverlay = () => {
    setOverlayOffset(0);
    setOverlayWidth(0);

    if (gradientRef.current) {
      const stop1 = gradientRef.current.children[0];
      const stop2 = gradientRef.current.children[1];

      stop1.setAttribute("offset", "0%");
      stop1.setAttribute("stop-color", "rgba(255,255,255,0.5)");
      stop2.setAttribute("offset", "0%");
      stop2.setAttribute("stop-color", "rgba(255,255,255,0.5)");
    }
  };

  React.useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.style.backgroundColor = "#ff0000";
  }, [containerRef]);

  return (
    <ResponsiveContainer style={lineChartContainerStyle} ref={containerRef}>
      <LineChart
        width="100%"
        data={data}
        onMouseMove={updateOverlay}
        onMouseLeave={resetOverlay}
      >
        <defs>
          <linearGradient id="lineGradient" ref={gradientRef}>
            <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
            <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
          </linearGradient>
        </defs>

        <text
          x="10"
          y="10"
          textAnchor="start"
          dominantBaseline="hanging"
          style={lineChartTitleStyle}
        >
          {titleFirstPart}
        </text>
        <text
          x="10"
          y="30"
          textAnchor="start"
          dominantBaseline="hanging"
          style={lineChartTitleStyle}
        >
          {titleSecondPart}
        </text>

        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey="day"
          type="category"
          tick={xAxisStyle}
          tickFormatter={(val) => getWeekDay(val)}
          padding={{ left: 7, right: 7 }}
          stroke="#fff"
          dy={5}
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
          stroke="url(#lineGradient)"
          strokeWidth={2}
          dot={false}
          activeDot={lineChartStyle}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartContainer;
