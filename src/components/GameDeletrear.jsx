import { TitleFrameGame } from './TitleFrameGame';
import { useMainOptions } from '../hooks/useMainOptions';
import { Counter321 } from './321counter';

function StartAnimation() {
  return (
    <section className={'startAnimation'}>
      <div className='text'>
        <div className='letterContainer letterSlide'>
          <p className='letter letter2'>C</p>
        </div>
        <div className='letterContainer letterSlide'>
          <p className='letter letter2'>O</p>
          <p className='letter letter4'>L</p>
        </div>
        <div className='letterContainer letterSlide'>
          <p className='letter letter1'>P</p>
          <p className='letter letter2'>M</p>
          <p className='letter letter3'>V</p>
          <p className='letter letter4'>E</p>
        </div>
        <div className='letterContainer letterStatic'>
          <p className='letter letter'>E</p>
        </div>
        <div className='letterContainer letterStatic'>
          <p className='letter letter'>R</p>
        </div>
        <div className='letterContainer letterSlide'>
          <p className='letter letter1'>R</p>
          <p className='letter letter3'>A</p>
        </div>
        <div className='letterContainer letterSlide'>
          <p className='letter letter1'>O</p>
          <p className='letter letter3'>N</p>
        </div>
        <div className='letterContainer letterSlide'>
          <p className='letter letter3'>O</p>
        </div>
      </div>
      <div className='underlineContainer'>
        <span className='underline'></span>
        <span className='underline'></span>
        <span className='underline'></span>
        <span className='underline underlineStatic'></span>
        <span className='underline underlineStatic'></span>
        <span className='underline'></span>
        <span className='underline'></span>
        <span className='underline'></span>
      </div>
    </section>
  );
}

function Game() {
  const itemsLeft = [];
  const itemsRight = [];
  for (let i = 0; i < 7; i++) {
    itemsLeft.push(
      <div
        key={i}
        className='item'
        style={{
          animation: `itemSlideInLeft .5s ease ${i * 0.03}s both`,
        }}
      >
        <p>PERRO</p>
      </div>
    );
  }
  for (let i = 0; i < 8; i++) {
    itemsRight.push(
      <div
        key={i}
        className='item'
        style={{
          animation: `itemSlideInRight .5s ease ${i * 0.05 + 0.21}s both`,
        }}
      >
        <p>PERRO</p>
      </div>
    );
  }

  return (
    <section className='game'>
      <div className='left'>{itemsLeft}</div>
      <div className='right'>{itemsRight}</div>
    </section>
  );
}

function GameInterface() {
  const { mainOptions } = useMainOptions();
  const stage = `stage${mainOptions.stage}`;
  return (
    <section className={`gameInterface`}>
      <div className={`topBanner `}>
        <div className={`gameTitle`}>
          <p>Deletrear</p>
        </div>
        <div className='team'>
          <div className='borderContainer'>
            <p>Equipo Verde</p>
          </div>
        </div>
        <div className='gameInfo'>
          {/* <div className='letters'>
            <span>P</span>
            <span>R</span>
          </div> */}
          <div className='pts'>
            <p>0</p>
          </div>
          <div className='time'>
            <p>90</p>
          </div>
        </div>
      </div>
      {stage == 'stage3' && <Counter321 stage={stage} color={'white'} />}
    </section>
  );
}

export function GameDeletrear({ fadeInOut }) {
  const { mainOptions } = useMainOptions();
  const stage = `stage${mainOptions.stage}`;

  const notVisible = mainOptions.current != 'deletrear' && 'notVisible';
  return (
    <>
      <section className={`gameSection gameDeletrear ${stage}  ${fadeInOut} ${notVisible}`}>
        <TitleFrameGame title={'Deletrear'} className='gameTitleFrame' />
        <GameInterface />
        {stage == 'stage3' && <Game />}
      </section>
    </>
  );
}
