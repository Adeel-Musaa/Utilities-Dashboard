import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const FrequencyGauge = () => {
  const frequency = 49.9;
  const percentage = (frequency / 60) * 100;

  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: [
          '#667eea',
          '#f0f0f0'
        ],
        borderWidth: 0,
        circumference: 180,
        rotation: 270,
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
        enabled: false,
      },
    },
    cutout: '75%',
  };

  return (
    <div className="card shadow-sm border-0" style={{ borderRadius: '15px' }}>
      <div className="card-body text-center p-4">
        <div className="d-flex align-items-center justify-content-center mb-3">
          <span style={{ fontSize: '1.5rem', marginRight: '8px' }}>⚡</span>
          <h5 className="card-title mb-0" style={{ fontWeight: '600', color: '#333' }}>Frequency Monitor</h5>
        </div>
        
        <div style={{ position: 'relative', height: '200px', marginBottom: '20px' }}>
          <Doughnut data={data} options={options} />
          
          {/* Center value display */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center'
          }}>
          
          </div>
          
          {/* Add CSS animations */}
          <style jsx>{`
            @keyframes shine {
              0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
              50% { transform: translateX(100%) translateY(100%) rotate(45deg); }
              100% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
            }
            
            @keyframes pulse {
              0% { transform: scale(1); opacity: 1; }
              50% { transform: scale(1.2); opacity: 0.7; }
              100% { transform: scale(1); opacity: 1; }
            }
          `}</style>
        </div>

        {/* Status indicators */}
        <div className="row">
          <div className="col-4">
            <div style={{ fontSize: '0.8rem', color: '#28a745', fontWeight: '600' }}>
              ● NORMAL
            </div>
          </div>
          <div className="col-4">
            <div style={{ fontSize: '0.8rem', color: '#6c757d' }}>
              Range: 48-52 Hz
            </div>
          </div>
          <div className="col-4">
            <div style={{ fontSize: '0.8rem', color: '#007bff', fontWeight: '600' }}>
              {percentage.toFixed(1)}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequencyGauge;