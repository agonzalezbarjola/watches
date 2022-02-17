import DigitalClock from "./components/DigitalClock";
import CountDown from "./components/CountDown";
import Cronometro from "./components/Cronometro";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="App__main">
        <h1> Watches APP</h1>

        <div className="App__main--watch">
          {" "}
          <DigitalClock />{" "}
        </div>
        <div className="App__main--countdown">
        <CountDown />
        </div>
        <div className="App__main--cronometro">
        <Cronometro />
        </div>
      </div>
    </div>
  );
}

export default App;
