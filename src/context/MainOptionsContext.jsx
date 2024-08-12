import { createContext, useState } from 'react';
import { teamsColor } from '../info/constans&info';

export const MainOptionsContext = createContext();

export function MainOptionsContextProvider({ children }) {
  const [mainOptions, setMainOptions] = useState({
    current: 'welcome',
    stage: 1,
    gamesSelected: [],
    collectionSelected: null,
    fullScreen: false,
    teamsCant: 2,
    startCounter: false,
    selectingColorTeam: false,
    teamsColors: ['', '', '', ''],
    teamsNames: ['', '', '', ''],
    teamsData: [
      { name: '', color: '', id: '' },
      { name: '', color: '', id: '' },
      { name: '', color: '', id: '' },
      { name: '', color: '', id: '' },
    ],
  });
  return (
    <MainOptionsContext.Provider
      value={{
        mainOptions,
        setMainOptions,
      }}
    >
      {children}
    </MainOptionsContext.Provider>
  );
}
