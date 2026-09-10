import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const HourlyPowerUsage = () => {
  const data = {
    labels: ['00', '02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'],
    datasets: [
      {
        label: 'Power Usage',
        data: [15, 25, 20, 35, 45, 55, 48, 52, 38, 42, 28, 18],
        backgroundColor: '#2196F3',
        borderColor: '#1976D2',
        borderWidth: 1,
        borderRadius: 4,
        borderSkipped: false,
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
        text: 'Hourly Power Usage',
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
        beginAtZero: true,
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
        },
        title: {
          display: true,
          text: 'Hours',
          font: {
            size: 12,
            weight: '500'
          }
        }
      }
    },
  };

  return (
    <div className="card shadow-sm mb-4 border-0" style={{ borderRadius: '10px' }}>
      <div className="card-body" style={{ height: '280px' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default HourlyPowerUsage;