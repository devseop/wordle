import React, { useEffect } from 'react';
import useWordle from '../hooks/useWordle';

export default function Wordle({ answer }) {
  const { currentGuess, handleKeyUp } = useWordle(answer);

  /** 키보드를 누를 때마다 handleKeyUp을 실행 */
  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);

    return () => window.removeEventListener('keyup', handleKeyUp);
  }, [handleKeyUp]);

  return (
    <div>
      <div>current guess: {currentGuess}</div>
    </div>
  );
}
