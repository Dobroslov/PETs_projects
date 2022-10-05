import React from 'react';

import './card.scss';

export const Card = ({ card, onSelectedCard, showCard }) => {
  const onClickCard = () => {
    onSelectedCard(card);
  };

  return (    
    <li>      
      <button
        disabled={card.matching}
        onClick={onClickCard}
        className={`text-button ${showCard ? ' active' : ''}`}
      >
        <span>{card.cardValue}</span>
      </button>
    </li>
  );
};
