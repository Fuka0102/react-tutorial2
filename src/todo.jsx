import React from 'react';

const getKey = () => Math.random().toString(32).substring(2);

function Todo() {
  const [items, setItems] = React.useState([
    { key: getKey(), text: 'Learn JavaScript', done: false },
    { key: getKey(), text: 'Learn React', done: false },
    { key: getKey(), text: 'Get some good sleep', done: false },
  ]);
  return null;
}

export function App() {
  return (
    <div className='container is-fluid'>
      <Todo />
    </div>
  );
}
