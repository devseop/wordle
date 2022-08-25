import { useState } from 'react';

const useWordle = answer => {
  const [tries, setTries] = useState(0); // 시도 횟수
  const [currentGuess, setCurrentGuess] = useState(''); // 현재 입력 값
  const [guesses, setGuesses] = useState([]); // 입력한 값의 모음
  const [history, setHistory] = useState([]); // 입력한 값에 대한 기록
  const [isCorrect, setIsCorrect] = useState(false); // 정답유무

  const formatGuess = () => {};

  const addNewGuess = () => {};

  /**
   * 1. 알파벳만 입력될 수 있도록 검사
   * 2. 현재 입력 값의 길이가 5 미만일 때 이전 입력 값과 현재 입력 값을 더함
   * */
  const handleKeyUp = ({ key }) => {
    console.log('pressed key: ', key);

    if (key === 'Enter') {
      if (tries < 5) {
      }
      if (history.includes(currentGuess)) {
      }
    }

    /** 입력값을 지우는 함수 */
    if (key === 'Backspace') {
      setCurrentGuess(prev => {
        return prev.slice(0, -1);
      });
      return;
    }

    /** 입력값을 검사하는 함수 */
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess(prev => prev + key);
      }
    }
  };

  return { tries, currentGuess, guesses, isCorrect, handleKeyUp };
};

export default useWordle;
