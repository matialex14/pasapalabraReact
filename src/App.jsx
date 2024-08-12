import { useRef, useState, useEffect } from 'react';

import { useMainOptions } from './hooks/useMainOptions.js';
import db from './conection/conection.js';
import { onSnapshot, collection } from 'firebase/firestore';

import { MainOptionsButton } from './components/MainOptionsButton.jsx';
import { WelcomePage } from './components/WelcomePage.jsx';
import { GameDeletrear } from './components/GameDeletrear.jsx';

function App() {
  const mainFrameRef = useRef();
  const [fullScreen, setFullScreen] = useState(false);

  const { mainOptions } = useMainOptions();
  const { setMainOptions } = useMainOptions();

  // let loading = useRef(true);

  useEffect(() => {
    // loading.current = false;
    onSnapshot(collection(db, 'mainOptions'), (snapshot) => {
      const dataDB = snapshot.docs.map((doc) => doc.data())[0];

      setMainOptions((prevState) => ({
        ...prevState,
        current: dataDB.current,
        stage: dataDB.stage,
        gamesSelected: dataDB.gamesSelected,
        collectionSelected: dataDB.collectionSelected,
        teamsCant: dataDB.teamsCant,
        startCounter: dataDB.startCounter,
        selectingColorTeam: dataDB.selectingColorTeam,
        teamsColors: dataDB.teamsColors,
        teamsNames: dataDB.teamsNames,
      }));
    });
    onSnapshot(collection(db, 'teamsData'), (snapshot) => {
      const dataDB = snapshot.docs.map((doc) => doc.data());
      setMainOptions((prevState) => ({
        ...prevState,
        teamsData: dataDB,
      }));
    });
  }, []);

  const updateFullScreenState = () => {
    if (!fullScreen) {
      const elem = mainFrameRef.current;
      elem.requestFullscreen();
      setFullScreen(!fullScreen);
      setMainOptions((prevState) => ({
        ...prevState,
        fullScreen: true,
      }));
    } else {
      if (mainFrameRef.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
      setMainOptions((prevState) => ({
        ...prevState,
        fullScreen: false,
      }));
    }
  };

  //* usar primera linea para pantalla completa al duplicar pantalla
  // let fullScreenStyle = mainOptions.fullScreen ? { padding: '0 2vw' } : { padding: '0' };
  let fullScreenStyle = mainOptions.fullScreen ? { padding: '0' } : { padding: '0' };

  const welcomeSlideOut = mainOptions.current != 'welcome' && 'slideOut';

  const deletrear = mainOptions.current == 'deletrear' || (mainOptions.current == 'welcome' && mainOptions.stage == 3);
  const fadeDeletrear = deletrear && mainOptions.stage == 1 && 'fadeIn';

  return (
    <>
      <section ref={mainFrameRef} className='mainFrame' style={fullScreenStyle}>
        <WelcomePage slideOut={welcomeSlideOut} />
        {deletrear && <GameDeletrear fadeInOut={fadeDeletrear} />}
        <MainOptionsButton mainFrameRef={mainFrameRef} updateFullScreenState={updateFullScreenState} />
      </section>
    </>
  );
}

export default App;
