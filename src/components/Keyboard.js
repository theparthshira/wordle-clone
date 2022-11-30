import React from "react";
import "./Keyboard.css";

const Keyboard = ({ mp, clickChar, setClickChar }) => {
  const col1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const col2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const col3 = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <div>
      <div className="col1">
        {col1.map((val, ind) => {
          const char = val.toLowerCase();
          const check = mp[char];
          return (
            <div
              style={{
                backgroundColor:
                  check === 1
                    ? "green"
                    : check === -1
                    ? "yellow"
                    : check === 0
                    ? "grey"
                    : "",
              }}
              id={ind}
              className="col1-item"
              onClick={() => {
                const random = Math.random();
                setClickChar({ random, char });
              }}
            >
              {val}
            </div>
          );
        })}
      </div>
      <div className="col1">
        {col2.map((val, ind) => {
          const char = val.toLowerCase();
          const check = mp[char];
          return (
            <div
              style={{
                backgroundColor:
                  check === 1
                    ? "green"
                    : check === -1
                    ? "yellow"
                    : check === 0
                    ? "grey"
                    : "",
              }}
              id={ind}
              className="col1-item"
              onClick={() => {
                const random = Math.random();
                setClickChar({ random, char });
              }}
            >
              {val}
            </div>
          );
        })}
      </div>
      <div className="col1">
        <div
          className="spcl-back"
          onClick={() => {
            const random = Math.random();
            setClickChar({ random, char: "Back" });
          }}
        >
          {"BACK"}
        </div>
        {col3.map((val, ind) => {
          const char = val.toLowerCase();
          const check = mp[char];
          return (
            <div
              style={{
                backgroundColor:
                  check === 1
                    ? "green"
                    : check === -1
                    ? "yellow"
                    : check === 0
                    ? "grey"
                    : "",
              }}
              id={ind}
              className="col1-item"
              onClick={() => {
                const random = Math.random();
                setClickChar({ random, char });
              }}
            >
              {val}
            </div>
          );
        })}
        <div
          className="spcl-entr"
          onClick={() => {
            const random = Math.random();
            setClickChar({ random, char: "Enter" });
          }}
        >
          {"ENTER"}
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
