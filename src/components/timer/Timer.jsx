import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './timer.styles.css';
import soundEffect from '../../assets/ping-sound.mp3';

export function Timer() {
  const timerInitialState = useSelector(store => store.timer);
  const { color } = useSelector(store => store.theme);
  const [timeLeft, setTimeLeft] = useState(timerInitialState.seconds);
  const [isCounting, setIsCounting] = useState(false);
  const [halfTime, setHalfTime] = useState(() => calcHalfTime());
  const [rightValue, setRightValue] = useState(-90);
  const [leftValue, setLeftValue] = useState([296, 4]);

  const progressRightBg = `linear-gradient(-90deg, transparent 50%, #151932 50%), linear-gradient(${rightValue}deg, #151932 50%, transparent 50%)`;
  const progressLeftBg = `linear-gradient(${leftValue[0]}deg, transparent ${leftValue[1]}%, #151932 ${leftValue[1]}%), linear-gradient(265deg, #151932 0%, transparent 0%)`;

  let countdown;
  function timer(sec) {
    const audio = document.querySelector('audio');
    audio.volume = 0.3;
    const rightSideSteps = 180 / halfTime;
    const leftSideSteps = [146 / halfTime, 96 / halfTime];

    countdown = setInterval(() => {
      displayTimeLeft(sec);
      if (sec >= halfTime) {
        setRightValue(prevValue => prevValue + rightSideSteps);
      }
      if (sec <= halfTime) {
        setLeftValue(prevValue => {
          return [prevValue[0] + leftSideSteps[0], prevValue[1] + leftSideSteps[1]];
        });
      }
      sec -= 1;
      if (sec < 0) {
        audio.play();
        clearInterval(countdown);
        setIsCounting(prevState => !prevState);
        return;
      }
      setTimeLeft(() => sec);
    }, 1000);
  }

  function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const timerDisplay = document.getElementById('timerDisplay');
    timerDisplay.textContent = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  }

  function calcHalfTime() {
    return timerInitialState.seconds / 2;
  }

  function reset() {
    setTimeLeft(timerInitialState.seconds);
    setIsCounting(false);
    displayTimeLeft(timerInitialState.seconds);
    setHalfTime(() => calcHalfTime());
    setRightValue(-90);
    setLeftValue([296, 4]);
  }

  const handleClick = () => {
    setIsCounting(prevState => !prevState);
  };

  useEffect(() => {
    if (isCounting) {
      timer(timeLeft);
    }

    return () => clearInterval(countdown);
  }, [isCounting]);

  useEffect(() => {
    reset();

    return () => clearInterval(countdown);
  }, [timerInitialState]);

  return (
    <div className='timer-container'>
      <div className='outer'>
        <div
          className='circle progress right'
          style={{ backgroundColor: color, backgroundImage: progressRightBg }}
        ></div>
        <div
          className='circle progress left'
          style={{ backgroundColor: rightValue > 89 ? color : '', backgroundImage: progressLeftBg }}
        ></div>
        <div className='inner'>
          <h2 id='timerDisplay'></h2>
          <button className='pause-play-btn' onClick={handleClick}>
            {isCounting ? 'pause' : 'start'}
          </button>
        </div>
      </div>
      <audio src={soundEffect} hidden></audio>
    </div>
  );
}
