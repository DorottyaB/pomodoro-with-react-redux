import { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContext } from '../../contexts/NavigationContext';
import { setSeconds } from '../../features/timer/timerSlice';
import './navigation.styles.css';

export function Navigation() {
  const [timer, setTimer] = useState('pomodoro');
  const { setSelectedTimer } = useContext(NavigationContext);
  const { color } = useSelector(store => store.theme);
  const dispatch = useDispatch();

  const colorClassName =
    color === '#f6706e' ? 'color-1' : color === '#48c3c3' ? 'color-2' : 'color-3';

  function handleChange(e) {
    const { value } = e.target;
    setTimer(value);
    setSelectedTimer(value);
    dispatch(setSeconds(value));
  }

  return (
    <div className='navigation-container'>
      <input
        type='radio'
        name='timer'
        id='pomodoro'
        value='pomodoro'
        onChange={handleChange}
        checked={timer === 'pomodoro'}
      />
      <label htmlFor='pomodoro' className={colorClassName}>
        pomodoro
      </label>
      <input
        type='radio'
        name='timer'
        id='shortBreak'
        value='short break'
        onChange={handleChange}
        checked={timer === 'short break'}
      />
      <label htmlFor='shortBreak' className={colorClassName}>
        short break
      </label>
      <input
        type='radio'
        name='timer'
        id='longBreak'
        value='long break'
        onChange={handleChange}
        checked={timer === 'long break'}
      />
      <label htmlFor='longBreak' className={colorClassName}>
        long break
      </label>
    </div>
  );
}
