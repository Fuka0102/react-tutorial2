import React from 'react';

function Password({ value, onChange }) {
  const [type, setIsRevealPassword] = React.useState('password');

  const togglePassword = () => setIsRevealPassword(type === 'password' ? 'text' : 'password');

  return (
    <>
      <input type={type} onChange={onChange} />
      <button onClick={togglePassword} role='presentation'>
        {type === 'password' ? '非表示' : '表示'}
      </button>
    </>
  );
}

export function App() {
  const [val, setVal] = React.useState('');

  const handleChange = (e) => setVal(e.target.value);

  return (
    <>
      <p>パスワード</p>
      <Password value={val} onChange={handleChange}></Password>
      <p>{val.length}文字</p>
    </>
  );
}
