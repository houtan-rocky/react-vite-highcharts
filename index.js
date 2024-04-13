import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Highcharts from 'highcharts';
import highchartsMore from 'highcharts/highcharts-more';
import HighchartsReact from 'highcharts-react-official';

highchartsMore(Highcharts);

const options = {
  chart: {
    type: 'column',
    inverted: true,
    polar: true,
  },
  title: {
    text: '',
  },
  pane: {
    size: 100,
    innerSize: '20%',
    endAngle: 270,
  },
  plotOptions: {
    column: {
      stacking: 'normal',
      borderWidth: 0,
      pointPadding: 0,
      groupPadding: 0.15,
    },
  },
  series: [
    {
      data: [4],
      type: 'column',
    },
  ],
  credits: {
    enabled: false,
  },
};

const App = () => (
  <div>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
);

render(<App />, document.getElementById('root'));
