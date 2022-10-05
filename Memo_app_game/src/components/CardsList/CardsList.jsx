import React from 'react';
import { Card } from '../Card/Card';

import './cardslist.scss';

export const CardsList = ({ cards, selectedCard, firstCard, secondCard}) => {
  const SelectCard = (card) => {
    selectedCard(card);
  };

  return (
    <main>
      <div className='container'>
        <ul className='cards-list grid'>
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              
              onSelectedCard={SelectCard}
              showCard={
                (firstCard && card.id === firstCard.id) ||
                (secondCard && card.id === secondCard.id) ||
                card.matching
              }              
            />
          ))}
        </ul>
      </div>
    </main>
  );
};
