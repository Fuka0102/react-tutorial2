import React from 'react';
import tippy from 'tippy.js';

export function App() {
  return (
    <TooltipButton id='myButton' content='Hello world!'>
      Hover me
    </TooltipButton>
  );
}

function TooltipButton({ id, content, children }) {
  React.useEffect(() => {
    tippy(`#${id}`, { content });
  }, [id, content]);
  return (
    <button id={id} type='button'>
      {children}
    </button>
  );
}
