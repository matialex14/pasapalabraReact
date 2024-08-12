import { AnimationEllipsis } from '../assets/svg/svgFiles';
import { useMainOptions } from '../hooks/useMainOptions';
import { teamsColor } from '../info/constans&info';

function SpanLetters({ word }) {
  const letters = [];
  const printWord = word;
  for (const letter in printWord) {
    letters.push(
      <span key={letter} className={`spanLetter spanLetter${letter}`} style={{ animation: `spanLetterAnimationDrop .3s ease ${0.05 * letter}s both ,spanLetterAnimationColor-${'pink'} 7s ease ${0.05 * letter + 3}s both infinite` }}>
        {word[letter]}
      </span>
    );
  }
  const { setMainOptions } = useMainOptions();
  const clickTextTitle = () => {
    setMainOptions((prevState) => ({
      ...prevState,
      stage: 2,
    }));
  };

  return (
    <h1 onClick={clickTextTitle} className='textTitle'>
      {letters}
    </h1>
  );
}
function ElementsAnimations() {
  const items1 = [];
  const items2 = [];
  const items3 = [];
  for (let i = 0; i < 5; i++) {
    items1.push(
      <div key={i} className={`element element${i}`}>
        <i className='loader --2'></i>
      </div>
    );
  }
  for (let i = 0; i < 4; i++) {
    items2.push(
      <div key={i} className={`element element${i}`}>
        <i className='loader --3'></i>
      </div>
    );
  }
  for (let i = 0; i < 5; i++) {
    items3.push(
      <div key={i} className={`element element${i}`}>
        <i className='loader --7'></i>
      </div>
    );
  }
  return (
    <div className='elementAnimations'>
      <div className=' group group1'>{items1}</div>
      <div className=' group group2'>{items2}</div>
      <div className=' group group3'>{items3}</div>
    </div>
  );
}
function Animations({ colorClassName }) {
  return (
    <div className='animations'>
      <AnimationEllipsis color={colorClassName} />
      <ElementsAnimations />
    </div>
  );
}

export function TitleFrame({ title, className, color }) {
  let randomColors = ['orange', 'green', 'purple', 'blue'];
  let colorClassName = className == 'gameTitleFrame' && randomColors[Math.floor(Math.random() * randomColors.length)];
  if (color) {
    colorClassName = color;
  }
  const { mainOptions } = useMainOptions();
  let classClose = '';
  if (mainOptions.stage == 2 || mainOptions.current != 'welcome') {
    classClose = 'close1';
  } else if (mainOptions.stage == 3 || mainOptions.current != 'welcome') {
    classClose = 'close2';
  }

  return (
    <section className={`titleFrame ${classClose} ${className}`}>
      <div className='title'>
        <Animations colorClassName={colorClassName} />
        <p className='textTitleBig'>{title}</p>
        <SpanLetters word={title} />
      </div>
    </section>
  );
}
