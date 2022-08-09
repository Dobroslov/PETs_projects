import React from 'react';
import DistanceBar from '../DistanceBar';
import DistanceScale from '../DistanceScale';
import HorsesList from '../HorsesList';

import './HorseRaceSchedule.css'

const HorseRaceSchedule = ({horseData}) => {
  return (
    <div>
      <HorsesList horseData={horseData}/>
      <div className='top-row'>
        
        <DistanceBar horseData={horseData.distance} />
      </div>

      <DistanceScale />
    </div>
  );
};

export default HorseRaceSchedule;
