import AppHeader from '../AppHeader';
import HorseRaceSchedule from '../HorseRaceSchedule';

import './app.css';


const App = () => {

  return (
    <div className='app'>
      <AppHeader />  
      <HorseRaceSchedule />
      {/* <HorseRaceSchedule horseData={horseData}/> */}
    </div>
  );
};

export default App;
