import { useState, useEffect } from 'react';
import { CardsList } from '../CardsList/CardsList';
import { Header } from '../Header/Header';

import './App.scss';

const getRandomNumbersInRange = (min, max, count) => {
  const result = [];

  while (result.length < count) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if (result.indexOf(randomNumber) === -1) {
      result.push(randomNumber);
    }
  }

  return result;
};

const randomСardNumbers = getRandomNumbersInRange(1, 60, 16);

function App() {
  const [cards, setCards] = useState([]);
  const [inverted, setInverted] = useState(0);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);

  const createShuffledCards = () => {
    setCards(getShuffleCards);
    resetCardsSelect();
    setInverted(0);
  };

  const getShuffleCards = () => {
    return [...randomСardNumbers, ...randomСardNumbers]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({
        cardValue: card,
        id: index + 1,
        matching: false,
      }));
  };

  const selectCard = (card) => {
    if (secondCard) {
      resetCardsSelect();
      setFirstCard(card);
    } else {
      firstCard ? setSecondCard(card) : setFirstCard(card);
    }
  };

  const resetCardsSelect = () => {
    setFirstCard(null);
    setSecondCard(null);
    setInverted((prevInvert) => prevInvert + 1);
  };

  useEffect(() => {
    if (firstCard && secondCard) {
      if (
        firstCard.cardValue === secondCard.cardValue &&
        firstCard.id !== secondCard.id
      ) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if ([firstCard.id, secondCard.id].includes(card.id)) {
              return { ...card, matching: true };
            } else {
              return card;
            }
          });
        });
        resetCardsSelect();
      }
    }
  }, [firstCard, secondCard]);

  useEffect(() => {
    createShuffledCards();
  }, []);

  return (
    <div className='App'>
      <Header createShuffledCards={createShuffledCards} />
      <CardsList
        cards={cards}
        selectedCard={selectCard}
        firstCard={firstCard}
        secondCard={secondCard}
      />      
      <p className='text-result'>Turns: {inverted}</p>
    </div>
  );
}

export default App;
