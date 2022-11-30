import React, { useEffect, useState } from "react";
import Keyboard from "./Keyboard";
import Word from "./Word";
import "./MainApp.css";
import { getWord, checkWord } from "./data";

const MainApp = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");
  const [input6, setInput6] = useState("");
  const [curr, setCurr] = useState(1);
  const [key, setKey] = useState(null);
  const [todayWord, setTodayWord] = useState(null);
  const [clickChar, setClickChar] = useState(null);

  const [check1, setCheck1] = useState(null);
  const [check2, setCheck2] = useState(null);
  const [check3, setCheck3] = useState(null);
  const [check4, setCheck4] = useState(null);
  const [check5, setCheck5] = useState(null);
  const [check6, setCheck6] = useState(null);
  const [mp1, setMp1] = useState({});

  useEffect(() => {
    const word = getWord();
    setTodayWord(word);
    console.log(word);
  }, []);

  useEffect(() => {
    if (key?.key === " ") return;
    if (key?.charCode >= 97 && key?.charCode <= 122) {
      if (
        (curr === 1 && input1.length === 5) ||
        (curr === 2 && input2.length === 5) ||
        (curr === 3 && input3.length === 5) ||
        (curr === 4 && input4.length === 5) ||
        (curr === 5 && input5.length === 5) ||
        (curr === 6 && input6.length === 5)
      ) {
        return;
      }

      const key_char = key?.charCode - 32;
      const char = String.fromCharCode(key_char);

      addCharString(char);
    } else if (key?.charCode >= 65 && key?.charCode <= 90) {
      if (input1.length === 5) {
        return;
      }
      let char = key?.key;

      addCharString(char);
    } else if (key?.key === "Backspace") {
      remCharString();
    } else if (key?.key === "Enter") {
      chkCharString();
    }
    // eslint-disable-next-line
  }, [key]);

  useEffect(() => {
    console.log(clickChar);
    if (clickChar?.char === "Back") {
      remCharString();
    } else if (clickChar?.char === "Enter") {
      chkCharString();
    } else {
      if (clickChar !== null && clickChar.char !== undefined) {
        const char = clickChar.char;
        addCharString(char);
      }
    }
    // eslint-disable-next-line
  }, [clickChar]);

  const checkInput = () => {
    let word =
      curr === 1
        ? input1
        : curr === 2
        ? input2
        : curr === 3
        ? input3
        : curr === 4
        ? input4
        : curr === 5
        ? input5
        : input6;

    const check = checkWord(word);

    if (check) {
      let mp = new Map();

      for (let i = 0; i < 5; i++) {
        if (mp.has(todayWord[i])) {
          let arr = mp.get(todayWord[i]);
          arr.push(i);
          mp.set(todayWord[i], arr);
        } else {
          const arr = [i];
          mp.set(todayWord[i], arr);
        }
      }

      word = word.toLowerCase();

      let yellow = [];
      let green = [];

      for (let i = 0; i < 5; i++) {
        if (mp.has(word[i])) {
          const arr1 = mp.get(word[i]);
          let hhh = false;

          for (let j = 0; j < arr1.length; j++) {
            if (arr1[j] === i) {
              let obj = mp1;
              obj[word[i]] = 1;
              setMp1(obj);
              green.push(i);
              hhh = true;
              break;
            }
          }

          if (!hhh) {
            const curr = mp1[word[i]];
            if (curr !== 1) {
              let obj = mp1;
              obj[word[i]] = -1;
              setMp1(obj);
            }
            yellow.push(i);
          }
        } else {
          let obj = mp1;
          obj[word[i]] = 0;
          setMp1(obj);
        }
      }

      if (word === todayWord) {
        setTimeout(() => {
          alert("You guessed it correct.");
        }, 1000);
        setCurr(10);
      }

      setCurr((prev) => prev + 1);

      if (curr === 1) {
        setCheck1({ yellow, green });
      } else if (curr === 2) {
        setCheck2({ yellow, green });
      } else if (curr === 3) {
        setCheck3({ yellow, green });
      } else if (curr === 4) {
        setCheck4({ yellow, green });
      } else if (curr === 5) {
        setCheck5({ yellow, green });
      } else if (curr === 6) {
        setCheck6({ yellow, green });
      }

      if (curr === 6) {
        if (word === todayWord) {
          setTimeout(() => {
            alert("You guessed it correct.");
          }, 1000);
        } else {
          setTimeout(() => {
            alert(`Today's word is ${todayWord}`);
          }, 1000);
        }
      }
    }
  };

  const addCharString = (char) => {
    let str;
    char = char.toUpperCase();

    switch (curr) {
      case 1:
        str = input1;
        str += char;
        setInput1(str);
        break;
      case 2:
        str = input2;
        str += char;
        setInput2(str);
        break;
      case 3:
        str = input3;
        str += char;
        setInput3(str);
        break;
      case 4:
        str = input4;
        str += char;
        setInput4(str);
        break;
      case 5:
        str = input5;
        str += char;
        setInput5(str);
        break;
      case 6:
        str = input6;
        str += char;
        setInput6(str);
        break;

      default:
        break;
    }
  };

  const remCharString = () => {
    let str;

    switch (curr) {
      case 1:
        str = input1;
        str = str.slice(0, -1);
        setInput1(str);
        break;
      case 2:
        str = input2;
        str = str.slice(0, -1);
        setInput2(str);
        break;
      case 3:
        str = input3;
        str = str.slice(0, -1);
        setInput3(str);
        break;
      case 4:
        str = input4;
        str = str.slice(0, -1);
        setInput4(str);
        break;
      case 5:
        str = input5;
        str = str.slice(0, -1);
        setInput5(str);
        break;
      case 6:
        str = input6;
        str = str.slice(0, -1);
        setInput6(str);
        break;

      default:
        break;
    }
  };

  const chkCharString = () => {
    if (
      (curr === 1 && input1.length === 5) ||
      (curr === 2 && input2.length === 5) ||
      (curr === 3 && input3.length === 5) ||
      (curr === 4 && input4.length === 5) ||
      (curr === 5 && input5.length === 5) ||
      (curr === 6 && input6.length === 5)
    ) {
      checkInput();
    }
  };

  return (
    <div
      tabIndex="-1"
      className="div-event"
      onKeyDown={(e) => {
        if (e.key === "Backspace") {
          setKey(e);
        }
      }}
      onKeyPress={(e) => setKey(e)}
    >
      <div className="main-div">
        <div className="word-cont">
          <Word input_char={input1} check={check1} />
          <Word input_char={input2} check={check2} />
          <Word input_char={input3} check={check3} />
          <Word input_char={input4} check={check4} />
          <Word input_char={input5} check={check5} />
          <Word input_char={input6} check={check6} />
        </div>
      </div>
      <br />
      <div className="main-bot">
        <Keyboard mp={mp1} clickChar={clickChar} setClickChar={setClickChar} />
      </div>
    </div>
  );
};

export default MainApp;
