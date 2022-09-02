import React from 'react';

export default function Modal({ isCorrect, answer, tries }) {
  return (
    <div className="modal">
      {isCorrect ? (
        <div>
          <h1>YOU WIN!</h1>
          <p className="solution">{answer}</p>
          <p>You found the answer in {tries} guesses :D</p>
        </div>
      ) : (
        <div>
          <h1>NEVERMIND!</h1>
          <p className="solution">{answer}</p>
          <p>Better luck next time :D</p>
        </div>
      )}
    </div>
  );
}
