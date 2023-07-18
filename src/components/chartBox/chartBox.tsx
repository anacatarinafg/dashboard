import { Link } from "react-router-dom";
import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";
import "./chartBox.scss";

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

const chartBox = (props: Props) => {
  return (
    <div className="chartBox">
      <div className="chartBox__boxInfo">
        <div className="boxInfo__title">
          <img src={props.icon} alt={props.title}></img>
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to="/" style={{ color: props.color }}>
          View all
        </Link>
      </div>
      <div className="chartBox__chartInfo">
        <div className="chartInfo__chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 75 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="chartInfo__text">
          <span
            className="chartInfo__percentage"
            style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
          >
            {props.percentage} %
          </span>
          <span className="chartInfo__duration">{props.duration}</span>
        </div>
      </div>
    </div>
  );
};

export default chartBox;
