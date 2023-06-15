import React, { useState } from 'react';
import gtwsData from './gtws.json';
import './App.css';

const App = () => {
  const [gatewayId, setGatewayId] = useState('');
  const [gatewayData, setGatewayData] = useState(null);

  const handleInputChange = (event) => {
    setGatewayId(event.target.value);
  };

  const handleSearch = () => {
    const gateway = gtwsData.gateways.find(item => item._id === gatewayId);
    setGatewayData(gateway);
  };

  return (
    <div className="container">
      <h1>Informações da Gateway</h1>
      <div className="search-container">
        <input type="text" value={gatewayId} onChange={handleInputChange} placeholder="Insira a ID do Gateway" />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="gateway-details">
        {gatewayData ? (
          <div>
            <h2>DETALHES:</h2>
            <p><span className="label">Nome:</span> {gatewayData.name}</p>
            <h3>Devices:</h3>
            <ul>
              {gatewayData.devices.map(device => (
                <li key={device._device}>
                  <p><span className="label">Device ID:</span> {device._device}</p>
                  <p><span className="label">Model ID:</span> {device.modelId}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Gateway ID invalida</p>
        )}
      </div>
    </div>
  );
};

export default App;
