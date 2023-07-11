import logo from './logo.svg';
import './App.css';
import Logo from './components/Logo';
import TimeContainer from './components/TimeContainer';
import LocationsScroller from './components/LocationsScroller';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Logo />
        {/* <TimeContainer/> */}
      </div>
        <LocationsScroller />
    </div>
  );
}

export default App;
