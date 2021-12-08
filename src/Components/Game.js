import React,{useState,useRef,useEffect} from "react";
import Board from "./Board";
import {calculateWinner} from "../helper";
const Game = () => {

const [history,setHistory] = useState([Array(9).fill(null)]);
const [stepNumber,setStepNumber] = useState(0);
const [xIsNext,setXIsNext] = useState(true);
const winner = calculateWinner(history[stepNumber]);
const xO = xIsNext ? "X" : "O";
const scoreCard = useRef(null);
const [countX,setCountX] = useState(0);
const [countO,setCountO] = useState(0);
const checkWinner = () => {
  if(winner=="X") {
              setCountX(countX+1);
              scoreCard.current.style.visibility="visible";
               }
     if(winner=="O") {
                setCountO(countO+1);
                scoreCard.current.style.visibility="visible";
  }
 }
const resetScore = () => {
     setCountX(0);
     setCountO(0);
 }
useEffect(()=>{
    checkWinner();
},[winner])
const handleClick = (i) => {
  const historyPoint = history.slice(0,stepNumber + 1);
  const current = historyPoint[stepNumber];
  const squares = [...current];
  if(winner || squares[i]) return;
  squares[i] = xO;
  setHistory([...historyPoint,squares]);
  setStepNumber(historyPoint.length);
  setXIsNext(!xIsNext);
};

const jumpTo = (step) => {
  setStepNumber(step);
  setXIsNext(step%2===0);
};

const renderMoves = () => {
return  history.map((_step,move) => {
    const destination = move ? `Go to move #${move}` : `Restart`;
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)} >{destination}</button>
      </li>
    );
  });
}

const closeScore = () => {
 scoreCard.current.style.visibility="hidden";
 }

return(
  <div>
  <footer><span>CreatedBy</span> <a href="https://github.com/AffableAniket"> @AniketUniyal</a></footer>
  <div className="score" ref={scoreCard}>
  <div class="cross" onClick={closeScore}>x</div>
  <h1>SCORECARD</h1>
   <table>
<thead>
<tr>
   <th>X</th>
   <th>O</th>
  </tr>
</thead>
<tbody>
    <tr>
    <td className="pointX">{countX}</td>
   <td className="pointO">{countO}</td>
  </tr>
</tbody>
   </table>
  <button className="btn" onClick={resetScore}>RESET</button>
  </div>
    <Board scoreXO={scoreCard} squares={history[stepNumber]} onClick={handleClick} />

    <div className="next">
    {renderMoves()}
    </div>
  </div>
);

}
export default Game;
