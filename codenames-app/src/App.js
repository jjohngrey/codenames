import './App.css';
import Card from './components/Card';
import { useState } from "react";



function App() {
  const [ pack, setPack ] = useState([
    { name: "IGLOO", correct: false },
    { name: "RACKET", correct: true },
    { name: "BUSINESS", correct: true },
    { name: "STRATEGY", correct: false },
    { name: "WAFFLES", correct: false },
    { name: "CHOCOLATE", correct: false },
    { name: "SAUCE", correct: false },
    { name: "SANTA", correct: true },
    { name: "GIFT", correct: true },
    { name: "HONEY", correct: false },
    { name: "POLAR BEAR", correct: false },
    { name: "HOUSE", correct: false },
    { name: "PANCAKES", correct: false },
    { name: "COMP SCI", correct: true },
    { name: "SKY", correct: false },
    { name: "HOCKEY", correct: true },
    { name: "SNOW", correct: true },
    { name: "REVENUE", correct: false },
    { name: "FIREHOSE", correct: false },
    { name: "TIMBITS", correct: true },
    { name: "PROFITS", correct: false },
    { name: "LEADERSHIP", correct: false },
    { name: "MAPLE", correct: true },
    { name: "CUSTOMER", correct: false },
    { name: "SUPPLY", correct: false }
]);
  const [ score, setScore ] = useState(0);

  return (
    <div className="App">
      <div className="container">
        <ul id="set">
            {
              pack.map(card => {
                // fix double clicks to account for score
                return <li onClick={() => {card.correct ? setScore(score + 1) : setScore(score - 1)}}><Card 
                  name={card.name}
                  class="card"
                  correctState={card.correct} 
                  /></li>
              })
            }
        </ul>
      </div>
      <div className="score">
        <h1>Score: {score}</h1>
      </div>
    </div>
  );
}

export default App;
