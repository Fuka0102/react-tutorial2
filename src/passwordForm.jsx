import React from 'react';

function Password(prop) {
  const [isRevealPassword, setIsRevealPassword] = React.useState(false);

  const togglePassword = () => {
    setIsRevealPassword((prevState) => !prevState);
  };

  return (
    <>
      <input type={isRevealPassword ? 'text' : 'password'} onChange={prop.onChange} />
      <button onClick={togglePassword} role='presentation'>
        {isRevealPassword ? '非表示' : '表示'}
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
