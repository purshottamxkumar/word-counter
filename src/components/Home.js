import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [char, setChar] = useState(0);
  const [word, setWord] = useState(0);

  const func = () => {
    updateChars();
    updateWords();
  }

  const resetBtn = () => {
    document.getElementById("main-text").value = "";
    setChar(0);
    setWord(0);
  }

  const updateChars = () => {
      setChar(document.getElementById("main-text").value.length);
  }

  function countWords(str) {
    const arr = str.split(' ');
    return arr.filter(word => word !== '').length;
  }

  const updateWords = () => {
    const num = countWords(document.getElementById("main-text").value);
    setWord(num);
  }

  return (
    <div>
        <div className="header">
            <h1>Word Counter</h1>
        </div>
        <div className="main-content">
            <div className="leftContent">
                {/* <h1>This is Me!</h1> */}
                <h2><label htmlFor="text-area">Enter the text below:</label></h2>
                <br />
                <textarea name="main-text" id="main-text" cols="50" rows="13" onChange={func}></textarea>
                <br />
                <button onClick={resetBtn}>RESET THE TEXT</button>
            </div>
            <div className="rightContent">
                <h3>Number of Characters:</h3>
                <div className="count">
                    <h2>{char}</h2>
                </div>
                <br />
                <h3>Number of Words:</h3>
                <div className="count">
                    <h2>{word}</h2>
                </div>
                <br />
            </div>
        </div>
        <div className="footer">
            <h3><a href="https://www.github.com/purshottamxkumar" id="profile-link" target="_blank" rel="noopener noreferrer">made By Purshottam Kumar!</a></h3>
        </div>
    </div>
  )
}

export default Home;