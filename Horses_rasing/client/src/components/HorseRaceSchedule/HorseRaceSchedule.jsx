import React from 'react';
import DistanceBar from '../DistanceBar';
import DistanceScale from '../DistanceScale';
import HorsesList from '../HorsesList';

import './HorseRaceSchedule.css'

const HorseRaceSchedule = () => {
  return (
    <div>
      <div className='top-row'>
        <HorsesList />
        <DistanceBar />
      </div>

      <DistanceScale />
    </div>
  );
};

export default HorseRaceSchedule;
