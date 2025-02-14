import { useState } from "react";
import BarChart from "./BarChart";
import AreaChart from "./AreaChart";
import Wrapper from "../assets/wrappers/ChartsContainer";

const ChartsContainer = ({ data }) => {
  const [barChart, setBarChart] = useState(true);
  return (
    <header>
      <Wrapper>
        <h4>Monthly Applications</h4>
        <button type="button" onClick={() => setBarChart(!barChart)}>
          {barChart ? "Show Area Chart" : "Show Bar Chart"}
        </button>
        {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
      </Wrapper>
    </header>
  );
};
export default ChartsContainer;



