import React from 'react';

const getKey = () => Math.random().toString(32).substring(2);

function Todo() {
  const [items, setItems] = React.useState([
    { key: getKey(), text: 'Learn JavaScript', done: false },
    { key: getKey(), text: 'Learn React', done: false },
    { key: getKey(), text: 'Get some good sleep', done: false },
  ]);

  const handleCheck = (checked) => {
    const newitems = items.map((item) => {
      if (item.key === checked.key) {
        item.done = !item.done;
      }
      return item;
    });
    setItems(newitems);
  };

  const handleAdd = (text) => {
    setItems([...items, { key: getKey(), text, done: false }]);
  };

  return (
    <div className='panel'>
      <div className='panel-heading'>React Todo</div>
      <Input onAdd={handleAdd} />
      {items.map((item) => (
        <TodoItem key={item.key} item={item} onCheck={handleCheck} />
      ))}
      <div className='panel-block'>{items.length} items</div>
    </div>
  );
}

function TodoItem({ item, onCheck }) {
  const handleChange = () => {
    onCheck(item);
  };

  return (
    <label className='panel-block'>
      <input type='checkbox' checked={item.done} onChange={handleChange}></input>
      <span className={item.done ? 'has-text-grey-light' : ''}>{item.text}</span>
    </label>
  );
}

function Input({ onAdd }) {
  const [text, setText] = React.useState('');

  const handleChange = (e) => setText(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onAdd(text);
      setText('');
    }
  };

  return (
    <div className='panel-block'>
      <input
        type='text'
        className='input'
        placeholder='Enter to add'
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export function App() {
  return (
    <div className='container is-fluid'>
      <Todo />
    </div>
  );
}
