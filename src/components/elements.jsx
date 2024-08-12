export function Title1({ text }) {
  return <p className='title1'>{text}</p>;
}

export function Subtitle1({ text }) {
  return <p className='subtitle1'>{text}</p>;
}
export function ButtonType1({ text, addClassName }) {
  return (
    <div className={`buttonType1  ${addClassName}`}>
      <div className='colorContainer'></div>
      <div className='textContainer'>
        <p>{text}</p>
      </div>
    </div>
  );
}
