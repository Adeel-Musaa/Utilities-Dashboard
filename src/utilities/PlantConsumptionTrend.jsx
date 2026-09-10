import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PlantConsumptionTrend = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Plant Consumption',
        data: [120, 122, 121, 123, 122, 124, 123, 125, 124, 126, 125, 127],
        borderColor: '#28a745',
        backgroundColor: 'rgba(40, 167, 69, 0.1)',
        pointBackgroundColor: '#28a745',
        pointBorderColor: '#28a745',
        tension: 0.3,
        pointRadius: 5,
        borderWidth: 3,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Plant Consumption Trend',
        font: {
          size: 14,
          weight: '600'
        },
        padding: 15
      },
      tooltip: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        cornerRadius: 8,
        padding: 10
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 115,
        max: 130,
        grid: {
          color: '#f0f0f0',
          lineWidth: 1
        },
        ticks: {
          font: {
            size: 11
          }
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 11
          }
        }
      }
    },
  };

  return (
    <div className="card shadow-sm mb-4 border-0" style={{ borderRadius: '10px' }}>
      <div className="card-body" style={{ height: '280px' }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default PlantConsumptionTrend;