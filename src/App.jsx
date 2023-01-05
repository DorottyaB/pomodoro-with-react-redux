import { useState } from 'react';
import './App.css';
import { Navigation } from './components/navigation/Navigation';
import { Modal } from './components/settings/modal/Modal';
import { Settings } from './components/settings/Settings';

function App() {
  return (
    <div className='App'>
      <h1>pomodoro</h1>
      <Navigation />
      <Settings />
      <Modal />
    </div>
  );
}

export default App;
