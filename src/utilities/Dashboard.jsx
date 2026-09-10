import React from 'react';
import Styles from './Styles'; // Import all styling
import TopSummaryCards from './TopSummaryCards';
import ProductionConsumption from './ProductionConsumption';
import ProductionDistributionBar from './ProductionDistributionBar';
import ProductionDistributionPie from './ProductionDistributionPie';
import EnergyParameters from './EnergyParameters';
import FrequencyGauge from './FrequencyGauge';
import ActualPowerGauge from './ActualPowerGauge';
import HourlyPowerUsage from './HourlyPowerUsage';
import DailyPowerUsage from './DailyPowerUsage';
import PlantConsumptionTrend from './PlantConsumptionTrend';
import AreaConsumptionTrend from './AreaConsumptionTrend';
import VoltageSpikes from './VoltageSpikes';

const Dashboard = () => {
  return (
    <div style={{ backgroundColor: '#f8f9fa', margin: 0, padding: '15px 30px', width: '100vw', minHeight: '100vh' }}>
      <div style={{ width: '100%', maxWidth: 'none' }}>
        {/* Import all styles */}
        <Styles />
        
        {/* Header */}
        <div className="row mb-4" style={{ marginLeft: '15px', marginRight: '15px' }}>
          <div className="col-12">
            <h1 className="text-center mb-4" style={{ color: '#333', fontWeight: 'bold' }}>
              Utilities Dashboard
            </h1>
          </div>
        </div>

        {/* Top Summary Cards */}
        <TopSummaryCards />

      {/* Production Consumption Row */}
      <ProductionConsumption />

      {/* Production Distribution Row */}
      <div className="row mb-4" style={{ marginLeft: '15px', marginRight: '15px' }}>
        <div className="col-md-6 mb-3">
          <ProductionDistributionBar />
        </div>
        <div className="col-md-6 mb-3">
          <ProductionDistributionPie />
        </div>
      </div>

      {/* Energy Parameters */}
      <EnergyParameters />

      {/* Gauge Row */}
      <div className="row mb-4" style={{ marginLeft: '15px', marginRight: '15px' }}>
        <div className="col-md-6 mb-3">
          <FrequencyGauge />
        </div>
        <div className="col-md-6 mb-3">
          <ActualPowerGauge />
        </div>
      </div>

      {/* Power Usage Charts Row */}
      <div className="row mb-4" style={{ marginLeft: '15px', marginRight: '15px' }}>
        <div className="col-md-6 mb-3">
          <HourlyPowerUsage />
        </div>
        <div className="col-md-6 mb-3">
          <DailyPowerUsage />
        </div>
      </div>

      {/* Plant Consumption Trend - Full Width */}
      <div className="row mb-4" style={{ marginLeft: '15px', marginRight: '15px' }}>
        <div className="col-12 mb-3">
          <PlantConsumptionTrend />
        </div>
      </div>

      {/* Area Consumption Trend - Full Width */}
      <div className="row mb-4" style={{ marginLeft: '15px', marginRight: '15px' }}>
        <div className="col-12 mb-3">
          <AreaConsumptionTrend />
        </div>
      </div>

        {/* Voltage Spikes - Full Width */}
        <div className="row mb-4" style={{ marginLeft: '15px', marginRight: '15px' }}>
          <div className="col-12 mb-3">
            <VoltageSpikes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;