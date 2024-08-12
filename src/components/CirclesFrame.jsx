import { useRef } from 'react';

function CircleItem({ elementLeft, elementTop }) {
  return <div className='circle' style={{ top: elementTop, left: elementLeft }}></div>;
}

export function CirclesFrame() {
  const circles = [];

  const circlesRef = useRef(null);
  const r = (window.innerHeight / 10) * 4; // numero de circulos
  const n = 25; // radio

  let angulo = 0;
  let originX = window.innerWidth / 2;
  let originY = window.innerHeight / 2;

  for (let i = 0; i < n; i++) {
    let elementLeft = `${originX + r * Math.cos(angulo + ((2 * Math.PI) / n) * i)}px`;
    let elementTop = `${originY + r * Math.sin(angulo + ((2 * Math.PI) / n) * i)}px`;
    circles.push(<CircleItem key={i} elementLeft={elementLeft} elementTop={elementTop}></CircleItem>);
  }

  //   useEffect(() => {
  //     setInterval(() => {
  //       console.log('useEffect');
  //       for (let i = 0; i < circles.length; i++) {
  //         angulo += 0.001;
  //         let currentLeft = `${originX + r * Math.cos(angulo + ((2 * Math.PI) / n) * i)}px`;
  //         let currentTop = `${originY + r * Math.sin(angulo + ((2 * Math.PI) / n) * i)}px`;

  //         circlesRef.current.children[i].style.left = currentLeft;
  //         circlesRef.current.children[i].style.top = currentTop;
  //       }
  //     }, 100);
  //   }, []);
  return (
    <>
      <div ref={circlesRef} className='circlesFrame'>
        {circles}
      </div>
    </>
  );
}
