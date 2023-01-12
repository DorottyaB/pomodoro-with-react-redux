import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Modal } from './components/settings/modal/Modal';
import { Navigation } from './components/navigation/Navigation';
import { Timer } from './components/timer/Timer';
import { Settings } from './components/settings/Settings';
import NavigationContextProvider from './contexts/NavigationContext';
import { useEffect } from 'react';
import { setSeconds } from './features/timer/timerSlice';

function App() {
  const { isOpen } = useSelector(store => store.modal);
  const { font } = useSelector(store => store.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSeconds('pomodoro'));
  }, []);

  return (
    <NavigationContextProvider>
      <div className={`App ${isOpen ? 'no-scroll' : ''}`} style={{ fontFamily: font }}>
        {isOpen && <Modal />}
        <h1>pomodoro</h1>
        <Navigation />
        <Timer />
        <Settings />
      </div>
    </NavigationContextProvider>
  );
}

export default App;
