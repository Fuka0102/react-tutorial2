import React from 'react';

const getKey = () => Math.random().toString(32).substring(2);

function Todo() {
  return null;
}

export function App() {
  return (
    <div className='container is-fluid'>
      <Todo />
    </div>
  );
}
