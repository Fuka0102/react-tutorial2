import React from 'react';

// GIF 共有サイト　GIPHY から持ってきた GIF ID
const gifIds = ['10dU7AN7xsi1I4', 'tBxyh2hbwMiqc', 'ICOgUNjpvO0PC', '33OrjzUFwkwEg', 'MCfhrrNN1goH6', 'rwCX06Y5XpbLG'];

// 上記配列の要素をランダムに返す
function getGifId() {
  const max = gifIds.length;
  const index = Math.floor(Math.random() * Math.floor(max));
  return gifIds[index];
}

function Gif({ id }) {
  return <img src={`https://media.giphy.com/media/${id}/giphy.gif`} alt={id.alt} />;
}

export function App() {
  /* ??? GIF ID を表す state を生成する */
  const [id, setGif] = React.useState(getGifId());

  const handleClick = () => {
    /* ??? ボタンが押されると GIF 画像が切り替わる */
    const newId = getGifId();
    setGif(newId);
  };

  return (
    <>
      <p>
        <button onClick={handleClick}>play</button>
      </p>
      <Gif id={id} />
    </>
  );
}
