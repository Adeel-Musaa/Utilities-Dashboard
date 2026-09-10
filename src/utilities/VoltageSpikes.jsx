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

const VoltageSpikes = () => {
  const data = {
    labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
    datasets: [
      {
        label: 'Red Line',
        data: [220, 225, 218, 235, 228, 245, 220],
        borderColor: '#F44336',
        backgroundColor: 'transparent',
        tension: 0.4,
        pointRadius: 3,
        borderWidth: 3,
        pointBackgroundColor: '#F44336',
      },
      {
        label: 'Yellow Line',
        data: [218, 230, 240, 220, 225, 235, 218],
        borderColor: '#FFEB3B',
        backgroundColor: 'transparent',
        tension: 0.4,
        pointRadius: 3,
        borderWidth: 3,
        pointBackgroundColor: '#FFEB3B',
      },
      {
        label: 'Purple Line',
        data: [222, 220, 225, 228, 250, 230, 222],
        borderColor: '#9C27B0',
        backgroundColor: 'transparent',
        tension: 0.4,
        pointRadius: 3,
        borderWidth: 3,
        pointBackgroundColor: '#9C27B0',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          padding: 15,
          usePointStyle: true,
          font: {
            size: 11,
            weight: '500'
          }
        }
      },
      title: {
        display: true,
        text: 'Voltage Spikes',
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
        min: 210,
        max: 260,
        grid: {
          color: '#f0f0f0',
          lineWidth: 1
        },
        ticks: {
          font: {
            size: 11
          }
        },
        title: {
          display: true,
          text: 'Voltage (V)',
          font: {
            size: 12,
            weight: '500'
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
          text: 'Time',
          font: {
            size: 12,
            weight: '500'
          }
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index',
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

export default VoltageSpikes;