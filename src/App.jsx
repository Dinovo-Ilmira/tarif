import React, { useState } from 'react';
import './App.css';
import Tariff from './Тariff';

function App() {
  const [selectedTariff, setSelectedTariff] = useState(null);

  const tariffs = [
    { title: 'Безлимитный 300', price: 300, speed: '10', isHighlighted: false },
    { title: 'Безлимитный 450', price: 450, speed: '50', isHighlighted: false },
    { title: 'Безлимитный 550', price: 550, speed: '100', isHighlighted: true },
    { title: 'Безлимитный 1000', price: 1000, speed: '200', isHighlighted: false },
  ];

  const handleSelectTariff = (price) => {
    setSelectedTariff(price);
  }

  return (
    <div className="app">
      <div className="tariffs">
        {tariffs.map((tariff, index) => (
          <Tariff
            key={index}
            title={tariff.title}
            price={tariff.price}
            speed={tariff.speed}
            isHighlighted={tariff.price === selectedTariff}
            onSelect={() => handleSelectTariff(tariff.price)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
