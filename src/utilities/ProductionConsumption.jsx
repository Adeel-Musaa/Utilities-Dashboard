import React from 'react';

const ProductionConsumption = () => {
  const miniCards = [
    { value: '11.0', label: 'Generator 1', icon: '🔋', bgColor: '#e3f2fd' },
    { value: '34.8', label: 'Generator 2', icon: '⚡', bgColor: '#f3e5f5' },
    { value: '2.5', label: 'Solar Panel', icon: '☀️', bgColor: '#fff3e0' },
    { value: '32.3', label: 'Wind Turbine', icon: '💨', bgColor: '#e8f5e8' },
    { value: '13.3', label: 'Hydropower', icon: '💧', bgColor: '#e0f2f1' },
    { value: '28.7', label: 'Backup Unit', icon: '🔧', bgColor: '#fce4ec' }
  ];

  return (
    <div className="row mb-4" style={{ marginLeft: '15px', marginRight: '15px' }}>
      <div className="col-lg-3 col-md-4 mb-3">
        <div className="card shadow-sm border-0" style={{ 
          borderRadius: '10px',
          height: '130px'
        }}>
          <div className="card-body d-flex flex-column justify-content-center">
            <h6 className="card-title mb-2 text-center" style={{ 
              fontSize: '0.9rem', 
              color: '#666',
              fontWeight: '500'
            }}>
              Production Consumption
            </h6>
            <h2 className="mb-0 text-center" style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700',
              color: '#333'
            }}>
              122.6
            </h2>
          </div>
        </div>
      </div>
      <div className="col-lg-9 col-md-8">
        <div className="row">
          {miniCards.map((card, index) => (
            <div key={index} className="col-lg-2 col-md-4 col-sm-4 col-6 mb-3">
              <div className="card shadow-sm border-0" style={{ 
                height: '130px',
                backgroundColor: card.bgColor,
                borderRadius: '12px'
              }}>
                <div className="card-body d-flex flex-column align-items-center justify-content-center text-center p-2">
                  <div style={{ 
                    fontSize: '1.2rem',
                    marginBottom: '8px'
                  }}>
                    {card.icon}
                  </div>
                  <h6 className="mb-1" style={{ 
                    fontSize: '1.2rem', 
                    fontWeight: '700',
                    color: '#333'
                  }}>
                    {card.value}
                  </h6>
                  <p className="mb-0" style={{ 
                    fontSize: '0.6rem', 
                    color: '#666',
                    fontWeight: '600',
                    lineHeight: '1.1'
                  }}>
                    {card.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductionConsumption;