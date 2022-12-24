import React from 'react';
import '../style.css';
import memesData from './memesData';

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState('');

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }
  return (
    <main>
      <div className='form'>
        {/* input parts */}

        <input type='text' placeholder='Top Text' className='form--input' />
        <input type='text' placeholder='Bottom Text' className='form--input' />
        <button className='form--button' onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <img src={memeImage} className='meme--image' />
    </main>
  );
}
