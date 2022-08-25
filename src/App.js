import { useEffect, useState } from 'react';
import Wordle from './components/Wordle';

function App() {
  const [answer, setAnswer] = useState(null);

  /**
   * 1. 단어들이 모여있는 data를 fetch로 받아온 후
   * 2. json의 words data를 추출
   * 3. words data 중 하나의 단어가 게임의 정답이므로
   * 4. math.random()을 이용하여 값을 뽑는다
   * 5. 뽑힌 값은 setAnswer로 삽입하여 게임 시작시 answer가 무작위로 설정되도록 한다.
   */

  useEffect(() => {
    fetch('http://localhost:3000/data/data.json')
      .then(res => res.json())
      .then(data => {
        const random =
          data.words[Math.floor(Math.random() * data.words.length)];
        setAnswer(random.word);
      });
  }, [setAnswer]);

  return (
    <div className="App">
      <h1>Wordle</h1>
      {answer && <Wordle answer={answer} />}
    </div>
  );
}

export default App;
