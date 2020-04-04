import React from 'react';
import logo from './logo.svg';
import flors from './flors.jpg';
import nazhseis from './nazhseisjoanne.m4a';
import './App.css';

const AudioPlay = ({src, shouldPlay}) => {
  const audioPlayer = new Audio(src);

  if (shouldPlay) {
    audioPlayer.play()
  } else {
    audioPlayer.pause();
  }

  return ("");
};

const ClickableLetter = (props) => {
  return (
    <span>
    <strong style={{ color: 'seagreen', fontSize: '90px', cursor: 'pointer', marginRight: '20px'}} onClick={props.action}>{props.letter}</strong>
    {props.children}
    </span>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color: 'darksalmon'}}>Happy Birthday</h1>
        <img src={flors}  width={300} height={200}/>
        <div>
      <ClickableLetter letter={"J"} action={() => { console.log("Clicked J...");}}>
        <AudioPlay src={nazhseis} shouldPlay={false} />
      </ClickableLetter>

      <ClickableLetter letter={"O"} />
      <ClickableLetter letter={"A"} />
      <ClickableLetter letter={"N"} />
      <ClickableLetter letter={"N"} />
      <ClickableLetter letter={"E"} />
        </div>
      </header>
    </div>
  );
}

export default App;
