import React, { useEffect } from 'react';
import useWordle from '../hooks/useWordle';
import Grid from './Grid';
import Keypad from './Keypad';

export default function Wordle({ answer }) {
  const { currentGuess, handleKeyUp, guesses, isCorrect, tries, usedKeys } =
    useWordle(answer);

  /** 키보드를 누를 때마다 handleKeyUp을 실행 */
  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);

    return () => window.removeEventListener('keyup', handleKeyUp);
  }, [handleKeyUp]);

  useEffect(() => {
    console.log(guesses, isCorrect, tries);
  }, [guesses, isCorrect, tries]);

  return (
    <div>
      <div>answer: {answer}</div>
      <div>current guess: {currentGuess}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} tries={tries} />
      <Keypad usedKeys={usedKeys} />
    </div>
  );
}
