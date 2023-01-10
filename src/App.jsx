import { useSelector } from 'react-redux';
import './App.css';
import { Modal } from './components/settings/modal/Modal';
import { Navigation } from './components/navigation/Navigation';
import { Timer } from './components/timer/Timer';
import { Settings } from './components/settings/Settings';
import NavigationContextProvider from './contexts/NavigationContext';

function App() {
  const { isOpen } = useSelector(state => state.modal);
  const { font } = useSelector(state => state.theme);

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
