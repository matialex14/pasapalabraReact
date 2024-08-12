import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { MainOptionsContextProvider } from './context/MainOptionsContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <MainOptionsContextProvider>
    <App />
  </MainOptionsContextProvider>
);
