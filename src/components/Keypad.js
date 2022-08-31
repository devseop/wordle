import React, { useEffect, useState } from 'react';

export default function Keypad({ usedKeys }) {
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/data/data.json')
      .then(res => res.json())
      .then(result => {
        setLetters(result.letters);
        // console.log(result.letters);
      });
  }, []);

  return (
    <div className="keypad">
      {letters &&
        letters.map(l => {
          const color = usedKeys[l.key];
          return (
            <div key={l.key} className={color}>
              {l.key}
            </div>
          );
        })}
    </div>
  );
}
