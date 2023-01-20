import React from 'react';

const random = (max) => {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
};

function Guess({ onGuess }) {
  const [val, setVal] = React.useState(0);
  const handleChange = (e) => setVal(e.target.value);
  const handleClick = () => onGuess(val * 1);

  return (
    <>
      <input value={val} type='number' onChange={handleChange} />
      <button type='button' onClick={handleClick}>
        予想する
      </button>
    </>
  );
}

export function NumberGuessing() {
  const max = 10;
  const initialCount = 5;
  const [answer, setAnswer] = React.useState(random(max));
  const [count, setCount] = React.useState(initialCount);
  const [message, setMessage] = React.useState('');

  const judge = (num) => {
    if (count === 0) return;

    console.log(num);

    setCount(count - 1);

    if (num === answer) {
      setMessage('正解です!');
    } else if (count === 1) {
      setMessage('残念でした!　正解は' + answer);
    } else if (num > answer) {
      setMessage('もっと小さいです');
    } else if (num < answer) {
      setMessage('もっと大きいです');
    }
  };

  const reply = () => {
    setAnswer(random(max));
    setCount(initialCount);
    setMessage('');
  };

  return (
    <>
      <Guess onGuess={judge} />
      <p>{message}</p>
      <p>あと{count}回</p>
      <button type='button' onClick={reply}>
        初めから
      </button>
    </>
  );
}
