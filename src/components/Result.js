import React from "react";
import "./Result.css";

const Result = ({ todayWord }) => {
  const word = todayWord?.toUpperCase();
  const nextGame = () => {
    console.log("clicked");
  };
  return (
    <div className="result-main">
      <p className="result-head">Today's wordle</p>
      <p className="result-arrow">↓</p>
      <div className="result-word">
        <div className="result-box">{word && word[0]}</div>
        <div className="result-box">{word && word[1]}</div>
        <div className="result-box">{word && word[2]}</div>
        <div className="result-box">{word && word[3]}</div>
        <div className="result-box">{word && word[4]}</div>
      </div>
      <p className="result-stat">STATISTICS</p>
      <div className="result-detail">
        <div style={{ marginRight: "20px" }} className="detail-item">
          <p className="detail-num">0</p>
          <p className="detail-text">{"Played "}</p>
        </div>
        <div
          style={{ marginRight: "15px", marginLeft: "20px" }}
          className="detail-item"
        >
          <p className="detail-num">0</p>
          <p className="detail-text">{"  Win  "}</p>
        </div>
        <div className="detail-item">
          <p className="detail-num">0</p>
          <p className="detail-text">Cur. Streak</p>
        </div>
        <div className="detail-item">
          <p className="detail-num">0</p>
          <p className="detail-text">Max. Streak</p>
        </div>
      </div>
      <div className="graph-main">
        <div className="graph-item">
          <p className="graph-num">1</p>
          <progress max="10" value="1" />
          <p>3</p>
        </div>
        <div className="graph-item">
          <p className="graph-num">2</p>
          <progress max="10" value="2" />
          <p>3</p>
        </div>
        <div className="graph-item">
          <p className="graph-num">3</p>
          <progress max="10" value="3" />
          <p>3</p>
        </div>
        <div className="graph-item">
          <p className="graph-num">4</p>
          <progress max="10" value="2" />
          <p>3</p>
        </div>
        <div className="graph-item">
          <p className="graph-num">5</p>
          <progress max="10" value="0" />
          <p>3</p>
        </div>
        <div className="graph-item">
          <p className="graph-num">6</p>
          <progress max="10" value="1" />
          <p>3</p>
        </div>
      </div>
      <div className="play-main">
        <div className="play-sec" onClick={nextGame()}>
          Play Again
        </div>
      </div>
    </div>
  );
};

export default Result;
