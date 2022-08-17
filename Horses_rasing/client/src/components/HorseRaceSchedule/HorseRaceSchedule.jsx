import React, { useState, useEffect } from 'react';
import DistanceBar from '../DistanceBar';
import './HorseRaceSchedule.css';
import io from 'socket.io-client';
// import { FINISH_DISTANCE } from '../../constants/constants';



const HorseRaceSchedule = () => {
  const socket = io();
  console.log(socket.connected);
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);
  const [horses, setHorses] = useState(null);
  const [distances, setDistances] = useState(null);
  // const [winners, setWinners] = useState([]);
   

  // const handlerData = (res) => {
  //   let horses = res.map((horse) => horse.name);
  //   let distances = res.map((horse) => horse.distance);

  //   // res.forEach((horse) => {
  //   //   if (horse.distance >= FINISH_DISTANCE) {
  //   //     setWinners([...winners, horse.name]);
  //   //     console.log('winners', winners);
  //   //   }
  //   // }); // не успел доделать логику отображения списка победителей

  //   setHorses(horses);
  //   setDistances(distances);
  // };

    useEffect(() => {
      socket.on('connect', () => {
        this.socket.on('ticker', function (response) {
          const res = Array.isArray(response) ? response : [response];
          
        });
        this.socket.emit('start');
        setIsConnected(true);   
      });
  
      socket.on('disconnect', () => {
        setIsConnected(false);
      });
  
      socket.on('pong', () => {
        // this.socket.on('ticker', function (response) {
        //   const res = Array.isArray(response) ? response : [response];
        //   console.log(res);
        // });
        setLastPong(new Date().toISOString());
      });
  
      return () => {
        socket.off('connect');
        socket.off('disconnect');
        socket.off('pong');
      };
    }, []);
  
    const sendPing = () => {
      socket.emit('ping');
    }
   
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
      <p>Connected: { '' + isConnected }</p>
      <p>Last pong: { lastPong || '-' }</p>
      <button onClick={ sendPing }>Send ping</button>
    </div>
  );
  
};

export default HorseRaceSchedule;
