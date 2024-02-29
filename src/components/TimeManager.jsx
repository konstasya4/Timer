import { useState, useEffect } from "react";
import Timer from "./Timer";
import "./StyleTimer.css";
const TimeManager = () => {
  const [isFirstActive, setIsFirstActive] = useState(false);
  const [isSecondActive, setIsSecondActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [minutesOfTheFirstTimer, setMinutesOfTheFirstTimer] = useState("");
  const [secondsOfTheFirstTimer, setSecondsOfTheFirstTimer] = useState(0);
  const [minutesOfTheSecondTimer, setMinutesOfTheSecondTimer] = useState("");
  const [secondsOfTheSecondTimer, setSecondsOfTheSecondTimer] = useState(0);
  const [visualTimer, setVisualTimer] = useState(true);
  const [updatedFirstNumber, setUpdatedFirstNumber] = useState("");
  const [updatedSecondNumber, setUpdatedSecondNumber] = useState("");

  const restart = () => {
    if (visualTimer) {
      setMinutesOfTheFirstTimer("");
      setSecondsOfTheFirstTimer(0);
      setIsFirstActive(false);
    } else {
      setMinutesOfTheSecondTimer("");
      setSecondsOfTheSecondTimer(0);
      setIsSecondActive(false);
    }
  };
  const changingTheTimer = () => {
    setVisualTimer(!visualTimer);
  };
  const startFirstTimer = () => {
    if (!isNaN(updatedFirstNumber) && updatedFirstNumber) {
      if (minutesOfTheFirstTimer || secondsOfTheFirstTimer) {
        setMinutesOfTheFirstTimer(updatedFirstNumber);
        setSecondsOfTheFirstTimer(0);
      } else {
        setVisualTimer(true);
        setIsFirstActive(true);
        setMinutesOfTheFirstTimer(updatedFirstNumber);
        setUpdatedFirstNumber("");
      }
    }
    else {
      setUpdatedFirstNumber("");
      alert("Введите число")
    }
  };

  const startSecondTimer = () => {
    if (updatedSecondNumber) {
      if (minutesOfTheSecondTimer || secondsOfTheSecondTimer) {
        setMinutesOfTheSecondTimer(updatedFirstNumber);
        setSecondsOfTheSecondTimer(0);
      } else {
        setVisualTimer(false);
        setIsSecondActive(true);
        setMinutesOfTheSecondTimer(updatedSecondNumber);
        setUpdatedSecondNumber("");
      }
    }
  };
  useEffect(() => {
    let interval;
    if (isFirstActive) {
      interval = setInterval(() => {
        if (secondsOfTheFirstTimer === 0 && minutesOfTheFirstTimer === 0) {
          clearInterval(interval);
          setIsFirstActive(false);
          setIsFinished(true);
          setTimeout(() => {
            setIsFinished(false);
          }, 1000);
        } else {
          if (secondsOfTheFirstTimer === 0) {
            setSecondsOfTheFirstTimer(59);
            setMinutesOfTheFirstTimer((prevMinutes) => prevMinutes - 1);
          } else {
            setSecondsOfTheFirstTimer((prevSeconds) => prevSeconds - 1);
          }
        }
        console.log(minutesOfTheFirstTimer, secondsOfTheFirstTimer);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isFirstActive, minutesOfTheFirstTimer, secondsOfTheFirstTimer]);

  useEffect(() => {
    let interval;
    if (isSecondActive) {
      interval = setInterval(() => {
        if (secondsOfTheSecondTimer === 0 && minutesOfTheSecondTimer === 0) {
          clearInterval(interval);
          setIsSecondActive(false);
          setIsFinished(true);
          setTimeout(() => {
            setIsFinished(false);
          }, 1000);
        } else {
          if (secondsOfTheSecondTimer === 0) {
            setSecondsOfTheSecondTimer(59);
            setMinutesOfTheSecondTimer((prevMinutes) => prevMinutes - 1);
          } else {
            setSecondsOfTheSecondTimer((prevSeconds) => prevSeconds - 1);
          }
        }
        console.log(minutesOfTheSecondTimer, secondsOfTheSecondTimer);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isSecondActive, minutesOfTheSecondTimer, secondsOfTheSecondTimer]);

  const changeInputOne = (e) => {
    setUpdatedFirstNumber(e.target.value);
  };
  const changeInputTwo = (e) => {
    setUpdatedSecondNumber(e.target.value);
  };
  const toggleTimer = () => {
    if (visualTimer) {
      setIsFirstActive(!isFirstActive);
    } else {
      setIsSecondActive(!isSecondActive);
    }
  };
  const clickingForTheFirstField = (e) => {
    if (e.key === "Enter") {
      startFirstTimer();
    }
  };
  
  const clickingForTheSecondField = (e) => {
    if (e.key === "Enter") {
      startSecondTimer();
    }
  };

  return (
    <div className="container">
      <div className="input-section">
        <div className="inputS">
          <input
            type="text"
            placeholder="1 таймер"
            value={updatedFirstNumber}
            onChange={changeInputOne}
            onKeyDown={clickingForTheFirstField}
          />
          <button onClick={startFirstTimer}>Запуск 1</button>
        </div>
        <div className="inputS">
          <input
            type="text"
            placeholder="2 таймер"
            value={updatedSecondNumber}
            onChange={changeInputTwo}
            onKeyDown={clickingForTheSecondField}
          />
          <button onClick={startSecondTimer}> Запуск 2</button>
        </div>
      </div>

      <div className="button-section">
        <button onClick={changingTheTimer}>Изменить</button>
      </div>
      <div className="timer-section">
        {visualTimer ? (
          <Timer
            minute={minutesOfTheFirstTimer}
            second={secondsOfTheFirstTimer}
            isFinished={isFinished}
            visualTimer={visualTimer}
            timerId="firstTimer"
          ></Timer>
        ) : (
          <Timer
            minute={minutesOfTheSecondTimer}
            second={secondsOfTheSecondTimer}
            isFinished={isFinished}
            visualTimer={visualTimer}
            timerId="secondTimer"
          ></Timer>
        )}
      </div>
      <div className="button-section">
        <button onClick={toggleTimer}>
          {visualTimer
            ? isFirstActive
              ? "Стоп"
              : "Старт"
            : isSecondActive
            ? "Стоп"
            : "Старт"}
        </button>
        <button onClick={restart}>Рестарт</button>
      </div>
    </div>
  );
};
export default TimeManager;
