import React from 'react';
import HorseRacingPicture from '../UI/horses.gif';

const AppHeader = () => {
  return (
    <div>
      <p>AppHeader</p>
      <img src={HorseRacingPicture} alt='horse racing' />
    </div>
  );
};

export default AppHeader