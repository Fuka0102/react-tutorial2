import ReactDOM from 'react-dom/client';
// import { app } from './displayGif';
// import { list } from './displayList';
// import { App } from './displayGif2';
// import { App } from './form';
// import { App } from './passwordForm';
import { NumberGuessing } from './guessNumber';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(app);
// root.render(list);
// root.render(<App />);
root.render(<NumberGuessing />);
