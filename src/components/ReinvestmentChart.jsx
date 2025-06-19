import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Legend, Tooltip } from 'chart.js';
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Legend, Tooltip);

const data = {
  labels: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
  datasets: [
    {
      label: 'Freeport-McMoRan',
      data: [100, 90, 75, 60, 70, 80, 95, 110, 120, 130],
      borderColor: '#f9a825',
      fill: false,
    },
    {
      label: 'Anglo American',
      data: [100, 105, 110, 115, 130, 150, 160, 155, 140, 130],
      borderColor: '#ff6f00',
      fill: false,
      borderDash: [5,5]
    },
    {
      label: 'Ørsted',
      data: [100, 120, 140, 160, 180, 200, 220, 240, 260, 280],
      borderColor: '#d32f2f',
      fill: false,
    }
  ]
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: 'bottom' }
  },
  scales: {
    y: { title: { display: true, text: 'Reinvestment Rate Index' }, min: 50 },
    x: { title: { display: true, text: 'Year' } }
  }
};

export default function ReinvestmentChart() {
  return <Line data={data} options={options} />;
}
