import { createContext, useState } from 'react';

export const NavigationContext = createContext('');

const NavigationContextProvider = props => {
  const [selectedTimer, setSelectedTimer] = useState('pomodoro');

  return (
    <NavigationContext.Provider value={{ selectedTimer, setSelectedTimer }}>
      {props.children}
    </NavigationContext.Provider>
  );
};

export default NavigationContextProvider;
