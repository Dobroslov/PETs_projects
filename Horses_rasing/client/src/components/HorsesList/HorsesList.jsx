import React from 'react';
import './HorsesList.css';
import './HorsesList.css';

const HorsesList = ({ horseData }) => {
  return (
    <div>
      <ul className='horses-list'>
        {horseData.map(({name, distance}) => {
          return <li key={name}><span>{name}</span> {distance} </li>;
        })}
      </ul>
    </div>
  );
};

export default HorsesList;
