import React from 'react';
import '../style.css';
import memesData from './memesData';

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme(prevData => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className='form'>
        {/* input parts */}

        <input
          type='text'
          placeholder='Top Text'
          className='form--input'
          onChange={handleChange}
          name='topText'
          value={meme.topText}
        />
        <input
          type='text'
          placeholder='Bottom Text'
          className='form--input'
          onChange={handleChange}
          name='bottomText'
          value={meme.bottomText}
        />
        <button className='form--button' onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <div className='meme'>
        <img src={meme.randomImage} className='meme--image' />
        <h2 className='meme--text top'>{meme.topText}</h2>
        <h2 className='meme--text bottom'>{meme.bottomText}</h2>
      </div>
    </main>
  );
}
