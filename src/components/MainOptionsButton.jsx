import useSound from 'use-sound';
import audioInicio from '../assets/audio/cortinaInicio.mp3';
import { useMainOptions } from '../hooks/useMainOptions.js';
import fullScreenImg from '../assets/images/icon--fullscreen.png';

export function MainOptionsButton({ updateFullScreenState }) {
  const { mainOptions } = useMainOptions();

  const [playSound1, { stop }] = useSound(audioInicio);

  const handleMainFrameClick = () => {
    if (mainOptions.fullScreen == false) {
      playSound1();
    } else {
      stop();
    }
    updateFullScreenState();
  };

  return (
    <div className='optionsButtons'>
      <button onClick={handleMainFrameClick}>
        <img src={fullScreenImg} alt='a' />
      </button>
    </div>
  );
}
