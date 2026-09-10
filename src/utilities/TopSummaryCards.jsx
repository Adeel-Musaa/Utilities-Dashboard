import React from 'react';

const TopSummaryCards = () => {
  const cards = [
    { value: '1,250', label: 'Active Users', bgColor: '#e3f2fd', textColor: '#0d47a1', icon: '👥' },
    { value: '89.2', label: 'Efficiency Rate', bgColor: '#f3e5f5', textColor: '#4a148c', icon: '⚡' },
    { value: '42.8', label: 'Daily Output', bgColor: '#fff8e1', textColor: '#e65100', icon: '🏭' },
    { value: '95.7', label: 'System Health', bgColor: '#e8f5e8', textColor: '#2e7d32', icon: '💚' },
    { value: '168.5', label: 'Temperature °C', bgColor: '#ffebee', textColor: '#c62828', icon: '🌡️' },
    
  ];

  return (
    <div className="row mb-4" style={{ marginLeft: '15px', marginRight: '15px' }}>
      {cards.map((card, index) => (
        <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-3">
          <div className="card h-100 shadow-sm border-0" style={{ 
            backgroundColor: card.bgColor,
            borderRadius: '12px',
            minHeight: '65px'
          }}>
            <div className="card-body text-center py-1 px-3">
              <div style={{ fontSize: '1.2rem', marginBottom: '4px' }}>
                {card.icon}
              </div>
              <h3 className="mb-0" style={{ 
                fontSize: '1.4rem', 
                fontWeight: '600', 
                color: card.textColor,
                margin: '0'
              }}>
                {card.value}
              </h3>
              <p className="mb-0" style={{ 
                fontSize: '0.7rem', 
                color: card.textColor,
                fontWeight: '500',
                opacity: '0.8'
              }}>
                {card.label}
              </p>
            </div>
          </div>
        </div>
      ))}
      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-3">
        <div className="card h-100 shadow-sm border-0" style={{ 
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #e49292ff 0%, #e48b6aff 100%)',
          minHeight: '65px'
        }}>
          <div className="card-body d-flex flex-column align-items-center justify-content-center py-1 px-3">
            <div style={{ fontSize: '1.2rem', marginBottom: '4px', color: 'white' }}>
              🚀
            </div>
            <h2 className="mb-0 text-center" style={{ 
              fontSize: '1.0rem', 
              fontWeight: '700', 
              color: 'white',
              lineHeight: '1.2'
            }}>
              350.8
            </h2>
            <p className="mb-0" style={{ 
              fontSize: '0.65rem', 
              color: 'white',
              fontWeight: '500',
              opacity: '0.9',
              marginTop: '1px'
            }}>
              Total Operations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSummaryCards;