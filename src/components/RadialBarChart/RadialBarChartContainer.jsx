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

const RadialBarChartContainer = ({ data }) => {
  const score = [{ name: "Score", value: data * 100 }];

  return (
    <ResponsiveContainer width="100%" height="100%">
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
        <RadialBar background fill="red" dataKey="value" cornerRadius={"50%"} />
        <text
          x="20"
          y="20"
          textAnchor="start"
          dominantBaseline="hanging"
          style={RadialBarChartTitle}
        >
          Score
        </text>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          style={RadialBarChartLabelScore}
        >
          {score[0].value}%
        </text>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          style={RadialBarChartLabel}
        >
          de votre objectif
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default RadialBarChartContainer;
