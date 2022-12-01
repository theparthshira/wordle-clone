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
                    ? "rgb(155, 155, 49)"
                    : check === 0
                    ? "grey"
                    : "",
                cursor: "pointer",
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
                    ? "rgb(155, 155, 49)"
                    : check === 0
                    ? "grey"
                    : "",
                cursor: "pointer",
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
          className="spcl-entr"
          style={{ cursor: "pointer" }}
          onClick={() => {
            const random = Math.random();
            setClickChar({ random, char: "Enter" });
          }}
        >
          {"ENTER"}
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
                    ? "rgb(155, 155, 49)"
                    : check === 0
                    ? "grey"
                    : "",
                cursor: "pointer",
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
          className="spcl-back"
          style={{ cursor: "pointer" }}
          onClick={() => {
            const random = Math.random();
            setClickChar({ random, char: "Back" });
          }}
        >
          {"BACK"}
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
