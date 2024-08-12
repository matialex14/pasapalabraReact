export function AnimationEllipsis({ color }) {
  let printColor1 = '';
  let printColor2 = '';
  if (color == 'orange') {
    printColor1 = 'rgb(255, 149, 10)';
    printColor2 = 'rgb(255, 149, 10)';
  } else if (color == 'pink') {
    printColor1 = 'rgb(252, 30, 145)';
    printColor2 = 'rgb(252, 30, 145)';
  } else if (color == 'purple') {
    printColor1 = 'rgb(168, 40, 227)';
    printColor2 = 'rgb(168, 40, 227)';
  } else if (color == 'green') {
    printColor1 = 'rgb(34, 212, 14)';
    printColor2 = 'rgb(34, 212, 14)';
  } else if (color == 'blue') {
    printColor1 = 'rgb(19, 149, 255)';
    printColor2 = 'rgb(19, 149, 255)';
  } else if (color == 'white') {
    printColor1 = 'rgb(255, 255, 255)';
    printColor2 = 'rgb(255, 255, 255)';
  } else {
    printColor1 = 'rgb(252, 30, 145)';
    printColor2 = 'rgb(150,35,244)';
  }

  return (
    <div className='animationEllipsis'>
      <svg className='animation1' width='801' height='801' viewBox='0 0 801 801' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='400.593' cy='400.238' r='399' stroke='white' strokeWidth='2' strokeLinecap='round' strokeDasharray='200 300' />
      </svg>
      <svg className='animation2' width='801' height='801' viewBox='0 0 801 801' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='400.593' cy='400.238' r='399' transform='rotate(-32.4144 400.593 400.238)' stroke='white' strokeWidth='2' strokeLinecap='round' strokeDasharray='200 300' />
      </svg>
      <svg className='animation3' width='801' height='801' viewBox='0 0 801 801' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='400.593' cy='400.238' r='398.5' transform='rotate(-32.4144 400.593 400.238)' stroke='white' strokeWidth='3' strokeLinecap='round' strokeDasharray='100 300' />
      </svg>
      <svg className='animation4' width='801' height='801' viewBox='0 0 801 801' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='400.593' cy='400.238' r='399' stroke='white' strokeWidth='2' strokeLinecap='round' strokeDasharray='200 300' />
      </svg>
      <svg className='animation5' width='801' height='801' viewBox='0 0 801 801' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='400.593' cy='400.238' r='398.5' transform='rotate(-32.4144 400.593 400.238)' stroke='white' strokeWidth='3' strokeLinecap='round' strokeDasharray='100 300' />
      </svg>
      <svg className='animation6' width='801' height='801' viewBox='0 0 801 801' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='400.593' cy='400.238' r='392.5' transform='rotate(-32.4144 400.593 400.238)' stroke={printColor1} strokeWidth='15' strokeLinecap='square' strokeDasharray='300 300' />
      </svg>
      <svg className='animation7' width='801' height='801' viewBox='0 0 801 801' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='400.593' cy='400.238' r='392.5' transform='rotate(-32.4144 400.593 400.238)' stroke={printColor1} strokeWidth='15' strokeLinecap='square' strokeDasharray='300 300' />
      </svg>
      <svg className='animation8' width='801' height='801' viewBox='0 0 801 801' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='400.593' cy='400.238' r='392.5' transform='rotate(4.61182 400.593 400.238)' stroke={printColor1} strokeWidth='15' strokeLinecap='square' strokeDasharray='50 550' />
      </svg>
      <svg className='animation9' width='801' height='801' viewBox='0 0 801 801' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='400.593' cy='400.238' r='399' stroke={printColor2} strokeWidth='2' strokeLinecap='round' strokeDasharray='200 300' />
      </svg>
      <svg className='animation10' width='801' height='801' viewBox='0 0 801 801' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='400.593' cy='400.238' r='392.5' transform='rotate(-32.4144 400.593 400.238)' stroke={printColor2} strokeWidth='15' strokeLinecap='square' strokeDasharray='300 300' />
      </svg>
      <svg className='animation11' width='801' height='801' viewBox='0 0 801 801' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='400.593' cy='400.238' r='399' stroke='white' strokeWidth='2' strokeLinecap='round' strokeDasharray='200 300' />
      </svg>
    </div>
  );
}
