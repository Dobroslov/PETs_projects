import React from 'react';
import './DistanceBar.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DistanceBar = ({ horses, distances }) => {
  const data = {
    labels: horses,
    datasets: [
      {
        label: 'Пройденное расстояние',
        data: distances,
        borderColor: '#81c784',
        backgroundColor: '#519657',
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    legend: {
      display: false,
    },
    label: {
      display: false,
    },
    responsive: true,
  };

  return (
    <div className='distance-bar'>
      <Bar options={options} data={data} />
    </div>
  );
};

export default DistanceBar;
