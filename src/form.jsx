import React from 'react';

const options = [
  { value: 'js', label: 'JavaScript' },
  { value: 'py', label: 'Python' },
  { value: 'rb', label: 'Ruby' },
  { value: '', label: 'その他' },
];

function TextArea() {
  const [name, setName] = React.useState('PHP');
  const handleChange = (e) => setName(e.target.value);
  return <input value={name} onChange={handleChange} />;
}

export function App() {
  const [answer, setAnswer] = React.useState('JavaScript');

  const getAnswer = (e) => {
    setAnswer(e.target.name);
  };

  return (
    <>
      {options.map((option, index) => (
        <label key={index}>
          <input
            type='radio'
            value={option.value}
            onChange={getAnswer}
            checked={answer === option.label}
            name={option.label}
          />
          {option.label}
        </label>
      ))}
      {answer === 'その他' ? <TextArea value={answer} /> : false}
      <hr></hr>
      <p>回答:{answer === 'その他' ? TextArea.value : answer}</p>
    </>
  );
}
