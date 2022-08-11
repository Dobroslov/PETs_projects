import React, { useState, useEffect } from 'react';
import DistanceBar from '../DistanceBar';
import DataProvider from '../../Services/DataProvider';
import './HorseRaceSchedule.css';

const HorseRaceSchedule = () => {
  const [horses, setHorses] = useState(null);
  const [distances, setDistances] = useState(null);
  const dataProvider = new DataProvider();

  const handlerData = (res) => {
    let horses1 = res.map((horse) => horse.name);
    let distances1 = res.map((horse) => horse.distance);
    
    setHorses(horses1)
    setDistances(distances1)
    
  };

  useEffect(() => {
    console.log('useEffect()');
    dataProvider.start(handlerData);
    return () => {
      dataProvider.finish()
    }
  }, []);

  return (
    <div>
      <DistanceBar horses={horses} distances={distances} />
    </div>
  );
};

export default HorseRaceSchedule;
