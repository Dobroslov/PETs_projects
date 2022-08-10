import React, { Component } from 'react';
import DistanceBar from '../DistanceBar';
import DataProvider from '../../Services/DataProvider';
import './HorseRaceSchedule.css';

class HorseRaceSchedule extends Component {
  constructor() {
    super()
    this.horseData = [];
    this.DataProvider = new DataProvider()
    this.DataProvider.start(this.handlerData.bind(this))
    // console.log(this.DataProvider)
  }

  handlerData = (res) => {
    console.log(res);
    this.horseData = res
    this.render()
  };
  
  render() {
    let horses = this.horseData.map((horse) => horse.name);
    console.log('horses', horses);
    let distances = this.horseData.map((horse) => horse.distance);
    return (
      <div>
        <DistanceBar horses={horses} distances={distances} />
      </div>
    );
  }
}

export default HorseRaceSchedule;
