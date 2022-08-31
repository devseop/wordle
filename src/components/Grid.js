import React from 'react';
import Row from './Row';

export default function Grid({ currentGuess, guesses, tries }) {
  return (
    <React.Fragment>
      {guesses.map((guess, index) => {
        if (tries === index) {
          return <Row key={index} currentGuess={currentGuess} />;
        }
        return <Row key={index} guess={guess} />;
      })}
    </React.Fragment>
  );
}
