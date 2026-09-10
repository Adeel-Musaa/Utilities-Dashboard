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

const DailyPowerUsage = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Daily Usage',
        data: [90, 85, 88, 92, 96, 89, 180], // Tall bar on Sunday (right side)
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
        text: 'Daily Power Usage',
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
        max: 200,
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
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default DailyPowerUsage;