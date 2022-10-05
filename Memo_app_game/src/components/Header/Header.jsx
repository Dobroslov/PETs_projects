import './header.scss';

export const Header = ({ createShuffledCards }) => {
  const onClickButtonNewGame = () => {
    createShuffledCards();
  };

  return (
    <header className='header'>
      <h1 className='title__header'>Memo</h1>
      <button className='header-button' onClick={onClickButtonNewGame}>
        New game
      </button>
    </header>
  );
};
