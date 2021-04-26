import React, { useState } from 'react';

export const Hello = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button onClick={increment}>Clique Aqui!</button>
      <p>Você pressionou o botão {counter} vezes.</p>
    </div>
  );
};
