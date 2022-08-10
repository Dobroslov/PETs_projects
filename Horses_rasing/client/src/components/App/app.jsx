import AppHeader from '../AppHeader';
import HorseRaceSchedule from '../HorseRaceSchedule';
import './app.css';

// import GotServices from '../gotServices';

const App = () => {

const horseData = [
  {
    name: 'Princess Diana',
    distance: 50
  },
  {
    name: 'Cricket',
    distance: 40
  },
  {
    name: 'Rebel',
    distance: 500
  },
  {
    name: 'Lucy',
    distance: 200
  },
  {
    name: 'Lacey',
    distance: 10
  },
  {
    name: 'Ginger',
    distance: 15
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
