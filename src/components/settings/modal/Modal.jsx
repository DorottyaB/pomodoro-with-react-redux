import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './modal.styles.css';
import { NumberInput } from './number-input/NumberInput';
import { selectColor, selectFont } from '../../../features/theme/themeSlice';
import { closeModal } from '../../../features/modal/modalSlice';
import { NavigationContext } from '../../../contexts/NavigationContext';
import { setSeconds } from '../../../features/timer/timerSlice';

export function Modal() {
  const timerInitialState = useSelector(store => store.timer.modes);
  const themeIinitialState = useSelector(store => store.theme);
  const dispatch = useDispatch();
  const { selectedTimer } = useContext(NavigationContext);

  const theme = {
    colors: [
      {
        id: 1,
        value: '#f6706e',
      },
      {
        id: 2,
        value: '#48c3c3',
      },
      {
        id: 3,
        value: '#d981f8',
      },
    ],
    fonts: [
      {
        id: 1,
        name: 'Raleway',
      },
      {
        id: 2,
        name: 'Roboto Slab',
      },
      {
        id: 3,
        name: 'Lobster Two',
      },
    ],
  };

  const [selectedTheme, setSelectedTheme] = useState({
    color: theme.colors[0].value,
    font: theme.fonts[0].name,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setSelectedTheme(prevState => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function handleSubmit() {
    dispatch(selectColor(selectedTheme.color));
    dispatch(selectFont(selectedTheme.font));
    dispatch(setSeconds(selectedTimer));
    dispatch(closeModal());
  }

  useEffect(() => {
    setSelectedTheme(() => {
      return {
        color: themeIinitialState.color,
        font: themeIinitialState.font,
      };
    });
  }, []);

  return (
    <div className='overlay'>
      <div className='modal-container'>
        <div className='modal-header'>
          <h2>Settings</h2>
          <div className='close-btn' title='close' onClick={() => dispatch(closeModal())}>
            &times;
          </div>
        </div>
        <section>
          <h3>Time (minutes)</h3>
          <div className='flex-container number-inputs'>
            {timerInitialState.map(entry => (
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
            {theme.fonts.map(font => {
              return (
                <div key={font.id}>
                  <input
                    type='radio'
                    name='font'
                    id={font.name}
                    value={font.name}
                    onChange={handleChange}
                    checked={selectedTheme.font === font.name}
                  />
                  <label htmlFor={font.name} style={{ fontFamily: font.name }}>
                    Aa
                  </label>
                </div>
              );
            })}
          </div>
        </section>
        <section className='flex-container'>
          <h3>Color</h3>
          <div className='flex-container small-gap color-inputs'>
            {theme.colors.map(color => {
              return (
                <div key={color.id}>
                  <input
                    type='radio'
                    name='color'
                    id={`color-${color.id}`}
                    value={color.value}
                    onChange={handleChange}
                    checked={selectedTheme.color === color.value}
                  />
                  <label htmlFor={`color-${color.id}`} style={{ backgroundColor: color.value }}>
                    {selectedTheme.color === color.value ? '✓' : ''}
                  </label>
                </div>
              );
            })}
          </div>
        </section>
        <button
          onClick={handleSubmit}
          className='modal-btn'
          style={{ backgroundColor: themeIinitialState.color, fontFamily: themeIinitialState.font }}
        >
          Apply
        </button>
      </div>
    </div>
  );
}
