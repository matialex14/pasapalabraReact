import { MainOptionsContext } from '../context/MainOptionsContext.jsx';
import { useContext } from 'react';

export function useMainOptions() {
  return useContext(MainOptionsContext);
}
