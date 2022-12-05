import React from "react";
import "./Result.css";

const Result = ({ todayWord, nextGame }) => {
  const word = todayWord?.toUpperCase();

  let currWin = localStorage.getItem("currWin");
  currWin = JSON.parse(currWin);

  let total = 0;

  if (currWin?.curr1) {
    total =
      currWin.curr1 +
      currWin.curr2 +
      currWin.curr3 +
      currWin.curr4 +
      currWin.curr5 +
      currWin.curr6;
  }

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
          <p className="detail-num">
            {localStorage.getItem("totalPlayed") || 0}
          </p>
          <p className="detail-text">{"Played "}</p>
        </div>
        <div
          style={{ marginRight: "15px", marginLeft: "20px" }}
          className="detail-item"
        >
          <p className="detail-num">{localStorage.getItem("totalWin") || 0}</p>
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
          <progress max={total} value={currWin?.curr1 || 0} />
          <p className="graph-value">{currWin?.curr1 || 0}</p>
        </div>
        <div className="graph-item">
          <p className="graph-num">2</p>
          <progress max={total} value={currWin?.curr2 || 0} />
          <p className="graph-value">{currWin?.curr2 || 0}</p>
        </div>
        <div className="graph-item">
          <p className="graph-num">3</p>
          <progress max={total} value={currWin?.curr3 || 0} />
          <p className="graph-value">{currWin?.curr3 || 0}</p>
        </div>
        <div className="graph-item">
          <p className="graph-num">4</p>
          <progress max={total} value={currWin?.curr4 || 0} />
          <p className="graph-value">{currWin?.curr4 || 0}</p>
        </div>
        <div className="graph-item">
          <p className="graph-num">5</p>
          <progress max={total} value={currWin?.curr5 || 0} />
          <p className="graph-value">{currWin?.curr5 || 0}</p>
        </div>
        <div className="graph-item">
          <p className="graph-num">6</p>
          <progress max={total} value={currWin?.curr6 || 0} />
          <p className="graph-value">{currWin?.curr6 || 0}</p>
        </div>
      </div>
      <div className="play-main">
        <div className="play-sec" onClick={nextGame}>
          Play Again
        </div>
      </div>
    </div>
  );
};

export default Result;
