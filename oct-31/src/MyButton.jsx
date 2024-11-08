import { useState } from 'react';

export default function MyButton({ isSpecial, text }) {
  const className = isSpecial ?
    'my-special-button' :
    'my-button'
  
  const [ count, setCount ] = useState(0);

  function handleButtonClicked() {
    console.log(`button '${text}' was clicked!`);
    setCount(count + 1);
    // DO NOT DO:
    // count = count + 1;
  }

  return (
    <button
      className={className}
      onClick={handleButtonClicked}
    >
      {text}, count: {count}
    </button>
  )
}
