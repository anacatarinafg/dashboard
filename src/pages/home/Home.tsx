import FirstBox from "../../components/firstBox/FirstBox";
import ChartBox from "../../components/chartBox/chartBox";
import BarChartBox from "../../components/barChartBox/BarChartBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import {
  chartBoxUser,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxConversion,
  barChartBoxRevenue,
  barChartBoxVisit,
} from "../../data";
import "./home.scss";

export const Home = () => {
  return (
    <div className="home">
      <div className="home__box home__box1">
        <FirstBox />
      </div>
      <div className="home__box home__box2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="home__box home__box3">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="home__box home__box4">
        <PieChartBox />
      </div>
      <div className="home__box home__box5">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="home__box home__box6">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="home__box home__box7">
        <BigChartBox />
      </div>
      <div className="home__box home__box8">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="home__box home__box9">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
};
