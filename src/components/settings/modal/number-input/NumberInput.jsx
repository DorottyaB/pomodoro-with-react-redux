import { useDispatch } from 'react-redux';
import { increment, decrement } from '../../../../features/timer/timerSlice';
import './number-input.styles.css';

export function NumberInput({ id, name, initialValue }) {
  const dispatch = useDispatch();

  return (
    <div className='number-input-container'>
      <p>{name}</p>
      <div className='input-box'>
        <span>{initialValue}</span>
        <div className='arrow-container'>
          <svg
            onClick={() => dispatch(increment(id))}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='#5f6170'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 15.75l7.5-7.5 7.5 7.5' />
          </svg>
          <svg
            onClick={() => dispatch(decrement(id))}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='#5f6170'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
          </svg>
        </div>
      </div>
    </div>
  );
}
