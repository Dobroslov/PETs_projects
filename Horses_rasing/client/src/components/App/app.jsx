import AppHeader from '../AppHeader';
import HorseRaceSchedule from '../HorseRaceSchedule';
import './app.css';

// import GotServices from '../gotServices';

const App = () => {

const horseData = [
  {
    name: 'Princess Diana',
    distance: 0
  },
  {
    name: 'Cricket',
    distance: 0
  },
  {
    name: 'Rebel',
    distance: 0
  },
  {
    name: 'Lucy',
    distance: 0
  },
  {
    name: 'Lacey',
    distance: 0
  },
  {
    name: 'Ginger',
    distance: 0
  },
];

  return (
    <div className='app'>
      {/* <GotServices/> */}
      <AppHeader />
      
      
      <HorseRaceSchedule horseData={horseData}/>
    </div>
  );
};

export default App;
