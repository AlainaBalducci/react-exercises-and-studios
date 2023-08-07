import logo from './logo.svg';
import './App.css';
import ShoeButton from './components/ShoeButton';
import Doorbell from './components/DoorBell';
import ReportForm from './components/Report';

function App() {
  return (
    <div className="App">
      <ShoeButton/>
      <Doorbell/>
      <ReportForm/>
    </div>
  );
}

export default App;
