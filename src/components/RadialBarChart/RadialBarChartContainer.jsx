import {
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";
import {
  RadialBarChartTitle,
  RadialBarChartLabelScore,
  RadialBarChartLabel,
} from "./_styles";

/**
 * @description Represents a radialbarchart element
 * @param {string} title title of the radialbarchart
 * @param {Object} data data represented in the radialbarchart
 * @returns {React.FC}
 */
const RadialBarChartContainer = ({ data, title }) => {
  const score = [{ name: "Score", value: data * 100 }];

  return (
    <ResponsiveContainer
      width="100%"
      height={250}
      style={{ background: "#FBFBFB", borderRadius: "5px" }}
    >
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="60%"
        outerRadius="70%"
        barSize={10}
        data={score}
        startAngle={90}
        endAngle={450}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={0}
          tick={false}
        />
        <RadialBar
          background
          fill="red"
          dataKey="value"
          cornerRadius={"50%"}
          style={{ padding: "1rem" }}
        />
        <text
          x="20"
          y="20"
          textAnchor="start"
          dominantBaseline="hanging"
          style={RadialBarChartTitle}
        >
          {title}
        </text>
        <text
          x="50%"
          y="45%"
          textAnchor="middle"
          dominantBaseline="middle"
          style={RadialBarChartLabelScore}
        >
          {score[0].value}%
        </text>
        <text
          x="50%"
          y="45%"
          textAnchor="middle"
          dominantBaseline="middle"
          style={RadialBarChartLabel}
        >
          <tspan x="50%" dy="1.2em">
            de votre
          </tspan>
          <tspan x="50%" dy="1.2em">
            objectif
          </tspan>
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default RadialBarChartContainer;
