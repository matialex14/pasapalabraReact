import { useState, useEffect } from 'react';
import { AnimationEllipsis } from '../assets/svg/svgFiles';
import { useMainOptions } from '../hooks/useMainOptions';
import { teamsColor } from '../info/constans&info';

function SpanLetters({ word }) {
  const visible = word < 4 && word > 0 ? 'visible' : '';

  return <h1 className={`textTitle ${visible}`}>{word}</h1>;
}

function Animations({ colorClassName }) {
  return (
    <div className='animations'>
      <AnimationEllipsis color={colorClassName} />
    </div>
  );
}

export function Counter321({ className, color, stage }) {
  const { mainOptions } = useMainOptions();

  const [number, setNumber] = useState(undefined);

  const visible = number < 4 && number > 0 ? 'visible' : '';

  const changeNumber = () => {
    setNumber((prev) => prev - 1);
  };
  if (number == undefined) {
    setTimeout(() => {
      setNumber(4);
    }, 1);
  }
  useEffect(() => {
    if (number < 1) return;
    number && setTimeout(() => changeNumber(), 1000);
  }, [number]);

  let colorClassName = color;
  let classClose = '';

  return (
    <section className={`titleFrame counter321 ${visible} ${classClose} ${className} ${stage}`}>
      <div className='title'>
        <Animations colorClassName={colorClassName} />
        <SpanLetters word={number} />
      </div>
    </section>
  );
}
