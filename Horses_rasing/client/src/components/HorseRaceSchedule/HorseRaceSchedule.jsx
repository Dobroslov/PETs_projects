import React from 'react';
import DistanceBar from '../DistanceBar';
import { io } from "socket.io-client";

import './HorseRaceSchedule.css';

const HorseRaceSchedule = ({ horseData }) => {
  let url = 'ws://localhost:3002/';
  const socket = io(url);
  console.log("🚀 ~ file: HorseRaceSchedule.jsx ~ line 12 ~ HorseRaceSchedule ~ socket", socket)

  socket.on('start', () => {
    console.log('start');
    
  });

  // console.log(horseData);
  let horses = horseData.map((horse) => horse.name);
  let distances = horseData.map((horse) => horse.distance);

  return (
    <div>
      <DistanceBar horses={horses} distances={distances} />
    </div>
  );
};

export default HorseRaceSchedule;
