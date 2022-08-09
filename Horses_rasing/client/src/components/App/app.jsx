import AppHeader from '../AppHeader';
import HorseRaceSchedule from '../HorseRaceSchedule';
import './app.css';

// import GotServices from '../gotServices';

const App = () => {
  return (
    <div className='app'>
      {/* <GotServices/> */}
      <AppHeader />
      
      
      <HorseRaceSchedule/>
    </div>
  );
};

export default App;
