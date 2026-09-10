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

const AreaConsumptionTrend = () => {
  const data = {
    labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
    datasets: [],
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
        text: 'Area Consumption Trend',
        font: {
          size: 14,
          weight: '600'
        },
        padding: 15
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 150,
        grid: {
          display: true,
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
          display: true,
          color: '#f0f0f0',
          lineWidth: 1
        },
        ticks: {
          font: {
            size: 11
          }
        }
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  return (
    <div className="card shadow-sm mb-4 border-0" style={{ borderRadius: '10px' }}>
      <div className="card-body" style={{ height: '280px' }}>
        <Line data={data} options={options} />
        <div className="text-center mt-3">
          <small className="text-muted" style={{ fontSize: '0.85rem' }}>No data available</small>
        </div>
      </div>
    </div>
  );
};

export default AreaConsumptionTrend;