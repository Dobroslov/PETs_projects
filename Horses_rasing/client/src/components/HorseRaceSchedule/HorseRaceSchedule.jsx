import React, { useState, useEffect } from 'react';
import DistanceBar from '../DistanceBar';
import DataProvider from '../../Services/DataProvider';
import './HorseRaceSchedule.css';
// import { FINISH_DISTANCE } from '../../constants/constants';


const dataProvider = new DataProvider();

const HorseRaceSchedule = () => {
  
  const [horses, setHorses] = useState(null);
  const [distances, setDistances] = useState(null);
  const [winners, setWinners] = useState([]);
  

  const handlerData = (res) => {
    let horses = res.map((horse) => horse.name);
    let distances = res.map((horse) => horse.distance);

    // res.forEach((horse) => {
    //   if (horse.distance >= FINISH_DISTANCE) {
    //     setWinners([...winners, horse.name]);
    //     console.log('winners', winners);
    //   }
    // }); // не успел доделать логику отображения списка победителей

    setHorses(horses);
    setDistances(distances);
  };

  useEffect(() => {
    dataProvider.start(handlerData); 
    return () => {
      dataProvider.finish()
    }   
  }, []);

  return (
    <div>
      <DistanceBar horses={horses} distances={distances} />
      {/* <ul>
        {winners.map((horse, index) => (          
          <li key={horse}>
            Лошадь с именем {horse} пришла под номером {index + 1}
          </li>
        ))}
      </ul>   не успел доделать логику отображения списка победителей    */}
    </div>
  );
};

export default HorseRaceSchedule;
