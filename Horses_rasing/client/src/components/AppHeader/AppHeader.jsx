import React from 'react';
import HorseRacingPicture from '../UI/horses.gif';
import './AppHeader.css';

const AppHeader = () => {
  return (
    <div className='app-header'>
      <img
        className='image-horses'
        src={HorseRacingPicture}
        alt='horse racing'
      />
      <h1>Лошадиные бега</h1>
    </div>
  );
};

export default AppHeader;
