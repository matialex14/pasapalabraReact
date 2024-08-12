import useSound from 'use-sound';
import audioInicio from '../assets/audio/cortinaInicio.mp3';
import { useMainOptions } from '../hooks/useMainOptions.js';

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
        <img src='../Images/icon--fullscreen.png' alt='' />
      </button>
    </div>
  );
}
