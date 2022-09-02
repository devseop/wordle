import React, { useEffect, useState } from 'react';
import useWordle from '../hooks/useWordle';
import Grid from './Grid';
import Keypad from './Keypad';
import Modal from './Modal';

export default function Wordle({ answer }) {
  const { currentGuess, handleKeyUp, guesses, isCorrect, tries, usedKeys } =
    useWordle(answer);
  const [showModal, setShowModal] = useState(false);

  /** 키보드를 누를 때마다 handleKeyUp을 실행 */
  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);

    if (isCorrect) {
      setTimeout(() => {
        setShowModal(true);
      }, 500);
      window.removeEventListener('keyup', handleKeyUp);
    }

    if (tries > 5) {
      setTimeout(() => {
        setShowModal(true);
      }, 500);
      window.removeEventListener('keyup', handleKeyUp);
    }

    return () => window.removeEventListener('keyup', handleKeyUp);
  }, [handleKeyUp, isCorrect, tries]);

  return (
    <div>
      {/* <div>answer: {answer}</div>
      <div>current guess: {currentGuess}</div> */}
      <div>tries: {tries}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} tries={tries} />
      <Keypad usedKeys={usedKeys} />
      {showModal && (
        <Modal isCorrect={isCorrect} tries={tries} answer={answer} />
      )}
    </div>
  );
}
