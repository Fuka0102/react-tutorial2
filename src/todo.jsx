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

  const [filter, setFilter] = React.useState('ALL');
  const handleFilterChange = (value) => setFilter(value);

  const displayItems = items.filter((item) => {
    if (filter === 'ALL') return true;
    if (filter === 'TODO') return !item.done;
    if (filter === 'DONE') return item.done;
  });

  return (
    <div className='panel'>
      <div className='panel-heading'>React Todo</div>
      <Input onAdd={handleAdd} />
      <Filter onChange={handleFilterChange} value={filter} />
      {displayItems.map((item) => (
        <TodoItem key={item.key} item={item} onCheck={handleCheck} />
      ))}
      <div className='panel-block'>{displayItems.length} items</div>
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

function Filter({ value, onChange }) {
  const handleClick = (key, e) => {
    e.preventDefault();
    onChange(key);
  };

  return (
    <div className='panel-tabs'>
      <a href='/' className={value === 'ALL' ? 'is-active' : ''} onClick={handleClick.bind(null, 'ALL')}>
        All
      </a>
      <a href='/' className={value === 'TODO' ? 'is-active' : ''} onClick={handleClick.bind(null, 'TODO')}>
        TODO
      </a>
      <a href='/' className={value === 'DONE' ? 'is-active' : ''} onClick={handleClick.bind(null, 'DONE')}>
        DONE
      </a>
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
