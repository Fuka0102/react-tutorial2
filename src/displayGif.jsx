import React from 'react';

function Gif(props) {
  return <img src={`https://media.giphy.com/media/${props.id}/giphy.gif`} alt={props.alt} />;
}

export const app = <Gif id='33OrjzUFwkwEg' />;
