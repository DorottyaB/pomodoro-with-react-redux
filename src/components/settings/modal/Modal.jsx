import { useSelector } from 'react-redux';
import './modal.styles.css';
import { NumberInput } from './number-input/NumberInput';

export function Modal() {
  const initialState = useSelector(store => store.timer);

  return (
    <div className='modal-container'>
      <div className='modal-header'>
        <h2>Settings</h2>
        <div className='close-btn' title='close'>
          &times;
        </div>
      </div>
      <section>
        <h3>Time (minutes)</h3>
        <div className='flex-container'>
          {initialState.map(entry => (
            <NumberInput
              key={entry.id}
              id={entry.id}
              name={entry.name}
              initialValue={entry.value}
            />
          ))}
        </div>
      </section>
      <section className='flex-container'>
        <h3>Font</h3>
        <div className='flex-container small-gap font-inputs'>
          <input type='radio' name='font' id='railway' />
          <label htmlFor='railway'>Aa</label>
          <input type='radio' name='font' id='robotoSlab' />
          <label htmlFor='robotoSlab' style={{ fontFamily: 'Roboto Slab' }}>
            Aa
          </label>
          <input type='radio' name='font' id='lobsterTwo' />
          <label htmlFor='lobsterTwo' style={{ fontFamily: 'Lobster Two' }}>
            Aa
          </label>
        </div>
      </section>
      <section className='flex-container'>
        <h3>Color</h3>
      </section>
    </div>
  );
}
