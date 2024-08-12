import { useRef } from 'react';
import { TitleFrame } from './TitleFrame';
import { gamesData, collectionsData, teamsColor } from '../info/constans&info';
import { useMainOptions } from '../hooks/useMainOptions.js';
import { Title1, Subtitle1, ButtonType1 } from './elements.jsx';

// gameSelectorFrame -------------------------------------------------------------
function GameItem1({ itemInfo, addClassName }) {
  return (
    <div className={`gameItem1 ${itemInfo.gameType} ${addClassName}`}>
      <div className='colorContainer'></div>
      <div className='textContainer'>
        <p>{itemInfo.name}</p>
      </div>
    </div>
  );
}
function CollectionItems() {
  const { mainOptions } = useMainOptions();
  const { setMainOptions } = useMainOptions();
  const renderReturn = [];
  for (const item of collectionsData) {
    const classNameIsSelected = mainOptions.collectionSelected == item.id ? 'selected' : '';
    renderReturn.push(<GameItem1 key={item.id} itemInfo={item} addClassName={classNameIsSelected} />);
  }
  return <div className='collectionItems'>{renderReturn}</div>;
}
function GameItems() {
  const { mainOptions } = useMainOptions();
  const { setMainOptions } = useMainOptions();

  const renderReturn = [];
  for (const item of gamesData) {
    const classNameIsSelected = mainOptions.gamesSelected.includes(item.id) ? 'selected' : '';
    renderReturn.push(<GameItem1 key={item.id} itemInfo={item} addClassName={classNameIsSelected} />);
  }
  return <div className='gameItems'>{renderReturn}</div>;
}
function GameSelectorFrame() {
  const { mainOptions } = useMainOptions();

  let classClose = '';
  if (mainOptions.stage == 3 || mainOptions.current != 'welcome') {
    classClose = 'close2';
  }
  return (
    <section className={`gameSelectorFrame menu ${classClose}`}>
      <Title1 text='Juegos' />
      <Subtitle1 text='Colecciones:' />
      <CollectionItems />
      <Subtitle1 text='Juegos:' />
      <GameItems />
    </section>
  );
}
// groupSelectorFrame -------------------------------------------------------------

function Teams() {
  const { mainOptions } = useMainOptions();
  const { setMainOptions } = useMainOptions();
  let teamsCantRef = useRef(mainOptions.teamsCant);

  const renderReturn = [];
  for (let i = 0; i < mainOptions.teamsCant; i++) {
    const classNameHeightAnimation = i >= teamsCantRef.current ? 'heightAnimation' : '';
    renderReturn.push(
      <div key={i} className={`teamContainer ${classNameHeightAnimation}`}>
        <ButtonType1 key={i} text={mainOptions.teamsData[i].name} addClassName={'teamName'} />
        <ButtonType1 key={i + 'b'} text='' addClassName={`colorSelector ${mainOptions.teamsData[i].color}`} />
      </div>
    );
  }
  const classNewItemHeightAnimation = mainOptions.teamsCant >= 4 ? 'heightAnimation' : '';

  function ColorChooseFrame() {
    const renderSelectColor = [];

    for (let i = 0; i < 9; i++) {
      renderSelectColor.push(<ButtonType1 key={i} text='' addClassName={`colorSelector ${teamsColor[i].color}`} />);
    }
    return <section className='colorChooseFrame'>{renderSelectColor}</section>;
  }

  return (
    <section className='teams'>
      {renderReturn}
      <ButtonType1 text={'+'} addClassName={`addNewTeam ${classNewItemHeightAnimation}`} />
      {mainOptions.selectingColorTeam == true && <ColorChooseFrame />}
    </section>
  );
}

function GroupSelectorFrame() {
  const { mainOptions } = useMainOptions();
  console.log(mainOptions);

  let classClose = '';
  if (mainOptions.stage == 3 || mainOptions.current != 'welcome') {
    classClose = 'close2';
  }
  return (
    <section className={`groupSelectorFrame menu ${classClose}`}>
      <Title1 text='Equipos' />
      <Subtitle1 text='' />
      <Teams />
    </section>
  );
}
//  -------------------------------------------------------------

export function WelcomePage({ slideOut }) {
  return (
    <>
      <section className={`welcomePage ${slideOut}`}>
        <TitleFrame title={'Pasapalabra'} />
        <GameSelectorFrame />
        <GroupSelectorFrame />
      </section>
    </>
  );
}
