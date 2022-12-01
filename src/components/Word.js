import React from "react";
import "./MainApp.css";

const Word = ({ input_char, check, curr, ind }) => {
  let qq1 = "";
  for (let i = 0; i < check?.yellow.length; i++) {
    if (check?.yellow[i] === 0) {
      qq1 = "yellow";
      break;
    }
  }
  for (let i = 0; i < check?.green.length; i++) {
    if (check?.green[i] === 0) {
      qq1 = "green";
      break;
    }
  }

  return (
    <>
      <div className="box-cont">
        <div
          style={{
            backgroundColor:
              qq1 === "green"
                ? "green"
                : qq1 === "yellow"
                ? "rgb(155, 155, 49)"
                : curr > ind
                ? "rgb(94, 94, 94)"
                : "",
            border:
              qq1 === "green"
                ? "green 2px solid"
                : qq1 === "yellow"
                ? "rgb(155, 155, 49) 2px solid"
                : curr > ind
                ? "rgb(94, 94, 94) 2px solid"
                : "",
            color: curr > ind ? "white" : "black",
          }}
          className={input_char.length === 1 ? "box-full1" : "box-empty"}
        >
          {input_char.length >= 1 && input_char[0]}
        </div>
        <div
          style={{
            backgroundColor: check?.green.find((ele) => ele === 1)
              ? "green"
              : check?.yellow.find((ele) => ele === 1)
              ? "rgb(155, 155, 49)"
              : curr > ind
              ? "rgb(94, 94, 94)"
              : "",
            border: check?.green.find((ele) => ele === 1)
              ? "green solid 2px"
              : check?.yellow.find((ele) => ele === 1)
              ? "rgb(155, 155, 49) solid 2px"
              : curr > ind
              ? "rgb(94, 94, 94) solid 2px"
              : "",
            color: curr > ind ? "white" : "black",
          }}
          className={input_char.length === 2 ? "box-full2" : "box-empty"}
        >
          {input_char.length >= 2 && input_char[1]}
        </div>
        <div
          style={{
            backgroundColor: check?.green.find((ele) => ele === 2)
              ? "green"
              : check?.yellow.find((ele) => ele === 2)
              ? "rgb(155, 155, 49)"
              : curr > ind
              ? "rgb(94, 94, 94)"
              : "",
            border: check?.green.find((ele) => ele === 2)
              ? "green solid 2px"
              : check?.yellow.find((ele) => ele === 2)
              ? "rgb(155, 155, 49) solid 2px"
              : curr > ind
              ? "rgb(94, 94, 94) solid 2px"
              : "",
            color: curr > ind ? "white" : "black",
          }}
          className={input_char.length === 3 ? "box-full3" : "box-empty"}
        >
          {input_char.length >= 3 && input_char[2]}
        </div>
        <div
          style={{
            backgroundColor: check?.green.find((ele) => ele === 3)
              ? "green"
              : check?.yellow.find((ele) => ele === 3)
              ? "rgb(155, 155, 49)"
              : curr > ind
              ? "rgb(94, 94, 94)"
              : "",
            border: check?.green.find((ele) => ele === 3)
              ? "green solid 2px"
              : check?.yellow.find((ele) => ele === 3)
              ? "rgb(155, 155, 49) solid 2px"
              : curr > ind
              ? "rgb(94, 94, 94) solid 2px"
              : "",
            color: curr > ind ? "white" : "black",
          }}
          className={input_char.length === 4 ? "box-full4" : "box-empty"}
        >
          {input_char.length >= 4 && input_char[3]}
        </div>
        <div
          style={{
            backgroundColor: check?.green.find((ele) => ele === 4)
              ? "green"
              : check?.yellow.find((ele) => ele === 4)
              ? "rgb(155, 155, 49)"
              : curr > ind
              ? "rgb(94, 94, 94)"
              : "",
            border: check?.green.find((ele) => ele === 4)
              ? "green solid 2px"
              : check?.yellow.find((ele) => ele === 4)
              ? "rgb(155, 155, 49) solid 2px"
              : curr > ind
              ? "rgb(94, 94, 94) solid 2px"
              : "",
            color: curr > ind ? "white" : "black",
          }}
          className={
            input_char.length === 5 && curr === ind ? "box-full5" : "box-empty"
          }
        >
          {input_char.length >= 5 && input_char[4]}
        </div>
      </div>
    </>
  );
};

export default Word;
