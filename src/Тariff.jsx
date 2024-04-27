import React from 'react';
import './Tariff.css';

function Tariff({ title, price, speed, isHighlighted, onSelect }) {
  const highlightClass = isHighlighted ? 'tariff-highlighted' : '';
  return (
    <div className={`tariff ${highlightClass}`} onClick={onSelect}>
      <div className="tariff-title">{title}</div>
      <div className="tariff-price">{price}₽/мес</div>
      <div className="tariff-info">
        до {speed} Мбит/сек
        <div>Объем включенного трафика не ограничен</div>
      </div>
    </div>
  );
}


export default Tariff;
