import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";

const RadialBarChartContainer = ({ data }) => {
  const score = [{ name: "Score", value: data * 100 }];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        width={730}
        height={250}
        innerRadius="30%"
        outerRadius="80%"
        data={score}
        startAngle={0}
        endAngle={score[0].value}
        barSize={10}
        style={{ background: "#FBFBFB", borderRadius: "5px" }}
      >
        <RadialBar
          label={{
            position: "center",
            fill: "#000",
          }}
          dataKey="value"
          style={{ fill: "red" }}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default RadialBarChartContainer;
