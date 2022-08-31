import { useState } from 'react';

const useWordle = answer => {
  const [tries, setTries] = useState(0); // 시도 횟수
  const [currentGuess, setCurrentGuess] = useState(''); // 현재 입력 값
  const [guesses, setGuesses] = useState([...Array(6)]); // 입력한 값의 모음
  const [history, setHistory] = useState(['hello', 'brave']); // 입력한 값에 대한 기록
  const [isCorrect, setIsCorrect] = useState(false); // 정답유무

  const formatGuess = () => {
    let answerArray = [...answer];

    /** 사용자가 입력한 값의 결과 */
    let formattedGuess = [...currentGuess].map(letter => {
      return { key: letter, color: 'gray' };
    });

    /** 글자와 위치가 모두 맞으면 초록색 */
    formattedGuess.forEach((letter, i) => {
      if (answerArray[i] === letter.key) {
        formattedGuess[i].color = 'green';
        answerArray[i] = null;
      }
    });

    /** 글자는 맞고 위치가 다르면 노란색 */
    formattedGuess.forEach((letter, i) => {
      if (answerArray.includes(letter.key) && letter.color !== 'green') {
        formattedGuess[i].color = 'yellow';
        answerArray[answerArray.indexOf(letter.key)] = null;
      }
    });
    return formattedGuess;
  };

  /** 새로운 단어 입력시 */
  const addNewGuess = formattedGuess => {
    if (currentGuess === answer) {
      setIsCorrect(true);
    }
    setGuesses(prevGuesses => {
      let newGuesses = [...prevGuesses];
      newGuesses[tries] = formattedGuess;
      return newGuesses;
    });
    setHistory(prevHistory => {
      return [...prevHistory, currentGuess];
    });
    setTries(prevTries => {
      return prevTries + 1;
    });
    setCurrentGuess('');
  };

  /**
   * 1. 알파벳만 입력될 수 있도록 검사
   * 2. 현재 입력 값의 길이가 5 미만일 때 이전 입력 값과 현재 입력 값을 더함
   * */
  const handleKeyUp = ({ key }) => {
    if (key === 'Enter') {
      /** 시도 횟수가 5번을 초과할 때 */
      if (tries > 5) {
        console.log('you used all your guesses');
        return;
      }
      /** 입력한 단어가 중복일 때 */
      if (history.includes(currentGuess)) {
        console.log('you already tried that word');
        return;
      }
      /** 5글자를 채우지 않았을 때 */
      if (currentGuess.length !== 5) {
        console.log('word must be 5 characters long');
        return;
      }
      const formatted = formatGuess();
      addNewGuess(formatted);
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
