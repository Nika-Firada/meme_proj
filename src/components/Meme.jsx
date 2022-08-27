import React, { useEffect } from 'react'
import { useState } from 'react';


const Meme = () => {

  // const [memeImage, setMemeImage] = useState("https://i.imgflip.com/3oevdk.jpg");
  const [meme, setMeme] = useState({
    top:"",
    bottom:"",
    img: "https://i.imgflip.com/3oevdk.jpg"
  });

  const [allMeme, setAllMeme] = useState([]);

  useEffect(()=>{
    async function getMemes(){
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = await res.json()
      setAllMeme(data.data.memes)
    }
    getMemes();
    return ()=> {
      
    }
  }, [])

  function getMemeImage(){
    const randomNum = Math.floor(Math.random() * allMeme.length);
    const url = allMeme[randomNum].url
    setMeme(prevMeme=>({
      ...prevMeme,
      img: url
    }))
  }

  function handleC(e){
    const {name, value} = e.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }
  return (
    <main>
        <div className='form'>
          <input value={meme.top} onChange={handleC} name='top' className='form-input' type="text" placeholder='top'/>
          <input value={meme.bottom} onChange={handleC} name='bottom' className='form-input' type="text" placeholder='bottom'/>
          <button onClick={getMemeImage} className='form-but'>Get a new meme image</button>
        </div>
        <div className='meme'>
          <img className='meme-img' src={meme.img}/>
          <h2 className='meme--text top'>{meme.top}</h2>
          <h2 className='meme--text bottom'>{meme.bottom}</h2>
        </div>
    </main>
  )
}

export default Meme