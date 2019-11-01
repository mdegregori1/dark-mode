import React from "react";
import Chart from "./Chart";

import styled from 'styled-components';

const Charts = ({ coinData }) => {
  console.log(, coinData)
  return (
    <div className="charts">
      {coinData.map(coin => (
        <div className="chart__container" key={coin.name}>
          <h4 className="coin__symbol">{coin.symbol}</h4>
          <div className="highlowcontainer">
            <h3 className="highlow"> <Text>24h low</Text>{coin.low_24h}</h3>
            <h3 className="highlow"><Text>24h high</Text>{coin.high_24h}</h3>
          </div>
          <div className="coin__logo">
            <img src={coin.image} height="40" alt={coin.name} />
          </div>
          <Chart sparklineData={coin.sparkline_in_7d.price} />
        </div>
      ))}
    </div>
  );
};
export default Charts;

const Text = styled.h3 `
padding: 2%;
margin: 5%;

`