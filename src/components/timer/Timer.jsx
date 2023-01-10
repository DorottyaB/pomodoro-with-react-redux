import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './timer.styles.css';

export function Timer() {
  const timerInitialState = useSelector(store => store.timer);
  const [timeLeft, setTimeLeft] = useState(timerInitialState.seconds);
  const [isCounting, setIsCounting] = useState(false);
  const { color } = useSelector(store => store.theme);

  let countdown;
  function timer(sec) {
    countdown = setInterval(() => {
      displayTimeLeft(sec);
      sec -= 1;
      if (sec < 0) {
        clearInterval(countdown);
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

  function reset() {
    setTimeLeft(timerInitialState.seconds);
    setIsCounting(false);
    displayTimeLeft(timerInitialState.seconds);
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
        <div className='circle progress right' style={{ backgroundColor: color }}></div>
        <div className='circle progress left' style={{ backgroundColor: color }}></div>
        <div className='inner'>
          <h2 id='timerDisplay'></h2>
          <button className='pause-play-btn' onClick={handleClick}>
            {isCounting ? 'pause' : 'play'}
          </button>
        </div>
      </div>
    </div>
  );
}
