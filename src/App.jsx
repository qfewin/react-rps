import React, { useState, useEffect } from 'react'
import { getDataFromApi } from "./api/";
import Result from './components/Result';
import WinCounter from "./components/WinCounter";
import './App.css';

const App = () => {

  /* create state for json data from api */
  const [myNewData, setMyNewData] = useState({});

  /* state variables for track of stats */
  const [wincount, setWinCount] = useState(() => JSON.parse(localStorage.getItem("wincount")));
  const [losscount, setLossCount] = useState(() => JSON.parse(localStorage.getItem("losscount")));
  const [drawcount, setDrawCount] = useState(() => JSON.parse(localStorage.getItem("drawcount")));
  
  useEffect(() => {
    // create cookie when winCount, lossCount, or drawcount value is changed? or when they all change? still understanding
    if (localStorage.getItem("wincount") !== undefined && localStorage.getItem("losscount") !== undefined && localStorage.getItem("drawcount") !== undefined) {
      localStorage.setItem("wincount", JSON.stringify(wincount));
      localStorage.setItem("losscount", JSON.stringify(losscount));
      localStorage.setItem("drawcount", JSON.stringify(drawcount));
    }
  }, [wincount, losscount, drawcount])

  /* logic for tracking wins, losses, draws */
  /* recall this when myNewData is updating meaning a button was clicked and I wanna change results on page. had trouble deciding where to put this */
  useEffect(() => {
    if (myNewData.pstat === "you won")
    {
      setWinCount(wincount => wincount + 1);
    }
    else if (myNewData.pstat === "you lost")
    {
      setLossCount(losscount => losscount + 1);
    }
    else if (myNewData.pstat === "draw")
    {
      setDrawCount(drawcount => drawcount + 1);
    }
  }, [myNewData])
  
  /* render */
  return (
    <div className="App">
      <h5>Rock, Paper, Scissors in React</h5>
      <div className="choices">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => getDataFromApi("rock").then((data) => setMyNewData(data.data))}
          >
            Rock
        </button>
        <button type="button" className="btn btn-secondary" onClick={() => getDataFromApi("paper").then((data) => setMyNewData(data.data))}>Paper</button>
        <button type="button" className="btn btn-secondary" onClick={() => getDataFromApi("scissor").then((data) => setMyNewData(data.data))}>Scissors</button>
      </div>
      <div className="results">
        <Result
          computer={myNewData.computer}
          cstat={myNewData.cstat}
          pstat={myNewData.pstat}
        />
        <WinCounter
          wincount={wincount}
          losscount={losscount}
          drawcount={drawcount}
        />
      </div>
      <button type="button" className="btn btn-secondary" id="logBtn" onClick={() => console.log(myNewData)}>Console log Response</button>
    </div>
  );
}

export default App