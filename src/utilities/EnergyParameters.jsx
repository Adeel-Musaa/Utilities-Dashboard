import React from 'react';

const EnergyParameters = () => {
  const parameters = [
    {
      name: 'Voltage',
      values: [396, 395, 394],
      unit: '',
      color: '#4CAF50'
    },
    {
      name: 'Power Factor',
      values: [0.88, 0.87, -0.02],
      unit: '',
      color: '#FF9800'
    },
    {
      name: 'Current',
      values: [106.4, 107.1, 106.4],
      unit: '',
      color: '#2196F3'
    }
  ];

  return (
    <div className="card shadow-sm mb-4 border-0" style={{ 
      borderRadius: '15px',
      minHeight: '300px'
    }}>
      <div className="card-body p-4">
        <div className="d-flex align-items-center justify-content-center mb-4">
          <span style={{ fontSize: '1.5rem', marginRight: '8px' }}>⚡</span>
          <h5 className="card-title mb-0" style={{ 
            fontSize: '1.2rem', 
            fontWeight: '600',
            color: '#333'
          }}>
            Energy Parameters
          </h5>
        </div>
        <div className="row h-100 align-items-center">
          {parameters.map((param, index) => (
            <div key={index} className="col-lg-4 col-md-4 col-12 mb-3">
              <div className="text-center h-100 d-flex flex-column justify-content-center">
                <div className="mb-3">
                  <div style={{ 
                    fontSize: '1.8rem', 
                    color: param.color,
                    marginBottom: '8px' 
                  }}>
                    {param.name === 'Voltage' ? '⚡' : param.name === 'Power Factor' ? '⚙️' : '🔋'}
                  </div>
                  <h6 className="mb-3" style={{ 
                    color: param.color, 
                    fontWeight: '600',
                    fontSize: '1rem'
                  }}>
                    {param.name}
                  </h6>
                </div>
                <div className="d-flex justify-content-center gap-2">
                  {param.values.map((value, valueIndex) => (
                    <div key={valueIndex} className="flex-fill">
                      <div 
                        className="p-3 rounded text-center"
                        style={{ 
                          backgroundColor: param.color + '15',
                          border: `2px solid ${param.color}`,
                          minWidth: '70px',
                          minHeight: '60px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: '8px'
                        }}
                      >
                        <div style={{ 
                          fontWeight: '700',
                          fontSize: '1rem',
                          color: param.color
                        }}>
                          {value}{param.unit}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnergyParameters;