import React, { useState } from 'react';
import './App.css';

function App() {
  const [randomMods, setRandomMods] = useState<string[]>([]);

  function getRandom() {
      const id = Math.floor(Math.random() * 27) + 1;
      return `/mods/mod (${id}).jpg`
  }

  function random() {
    const mods = [getRandom(), getRandom(), getRandom()];
    setRandomMods(mods);
  }

  const mods = randomMods.map((mod, index) => <div key={index}><img src={mod}/></div>)

  return (
    <div className="App">
      <div className="mods">{mods}</div>
      <button onClick={random}>Do it!</button>
    </div>
  );
}

export default App;
