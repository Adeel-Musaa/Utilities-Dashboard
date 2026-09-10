import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ProductionDistributionPie = () => {
  const data = {
    labels: ['Purple 33.3%', 'Green 21.4%', 'Red 12.3%', 'Blue 11.1%', 'Teal 21.9%'],
    datasets: [
      {
        data: [33.3, 21.4, 12.3, 11.1, 21.9],
        backgroundColor: [
          '#9C27B0',  // Purple
          '#4CAF50',  // Green
          '#F44336',  // Red
          '#2196F3',  // Blue
          '#009688',  // Teal
        ],
        borderWidth: 3,
        borderColor: '#fff',
        hoverBorderWidth: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 15,
          usePointStyle: true,
          font: {
            size: 12,
            weight: '500'
          }
        }
      },
      title: {
        display: true,
        text: 'Production Distribution',
        font: {
          size: 16,
          weight: '600'
        },
        padding: 20
      },
      tooltip: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        cornerRadius: 8,
        padding: 12
      }
    },
  };

  return (
    <div className="card shadow-sm border-0" style={{ borderRadius: '10px' }}>
      <div className="card-body" style={{ height: '350px' }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default ProductionDistributionPie;