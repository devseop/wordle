import React from 'react';
import Row from './Row';

export default function Grid({ currentGuess, guesses, tries }) {
  return (
    <React.Fragment>
      {guesses.map((guess, index) => {
        return <Row key={index} />;
      })}
    </React.Fragment>
  );
}
