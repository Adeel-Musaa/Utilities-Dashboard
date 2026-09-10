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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ActualPowerGauge = () => {
  const values = [20.7, 21.3, -0.3];
  const total = 332280;

  const data = {
    labels: ['Voltage', 'Current', 'Power Factor', 'Frequency', 'Load', 'Efficiency'],
    datasets: [
      {
        label: 'Current Performance (%)',
        data: [85, 92, 78, 95, 88, 82],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 205, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 159, 64, 0.7)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 2,
        borderRadius: 8,
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
      tooltip: {
        callbacks: {
          label: function(context) {
            return context.dataset.label + ': ' + context.parsed.y + '%';
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          font: {
            size: 12
          },
          callback: function(value) {
            return value + '%';
          }
        }
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 11
          },
          maxRotation: 45
        }
      }
    },
  };

  return (
    <div className="card shadow-sm border-0" style={{ borderRadius: '15px' }}>
      <div className="card-body p-4">
        <div className="d-flex align-items-center justify-content-center mb-3">
          <span style={{ fontSize: '1.5rem', marginRight: '8px' }}>📊</span>
          <h5 className="card-title mb-0" style={{ fontWeight: '600', color: '#333' }}>Power Performance</h5>
        </div>
        
        <div style={{ height: '200px', marginBottom: '20px' }}>
          <Bar data={data} options={options} />
        </div>

        {/* Performance indicators */}
        <div className="row mb-3">
          <div className="col-4">
           
          </div>
          <div className="col-4">
            
          </div>
          <div className="col-4">
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default ActualPowerGauge;