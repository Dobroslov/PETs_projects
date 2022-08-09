import React from 'react';
import HorseRacingPicture from '../UI/horses.gif';
import './AppHeader.css';

const AppHeader = () => {
  return (
    <div className='app-header'>
      <h1>Лошадиные бега</h1>
      <img className='image-horses' src={HorseRacingPicture} alt='horse racing' />
      <p>Будь счастлива Земля!</p>
    </div>
  );
};

export default AppHeader;
