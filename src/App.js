import React, { useState } from "react";
import flors from "./assets/flors.jpg";
import saimonAndEulaliaPhoto from "./assets/saimon-eulalia.jpg";
import saimonAndEulaliaAudio from "./assets/nazhseisjoanne.m4a";
import sofiaPhoto from "./assets/sofia.jpg";
import sofiaAudio from "./assets/sofia.ogg";
import marioPhoto from "./assets/mario.jpg";
import marioAudio from "./assets/mario.ogg";
import eliaPhoto from "./assets/elia.jpg";
import eliaAudio from "./assets/elia.m4a";
import polPhoto from "./assets/pol.jpg";
import polAudio from "./assets/pol.m4a";
import androullaPhoto from "./assets/androulla.jpeg";
import androullaAudio from "./assets/androulla.ogg";

import "./App.css";

const AudioPlay = ({ src, shouldPlay, setPlay }) => {
  const audioPlayer = new Audio(src);

  if (shouldPlay) {
    audioPlayer.play();
    setPlay(false);
  } else {
    audioPlayer.pause();
  }

  return "";
};

const ClickableLetter = ({ letter, children, action }) => {
  return (
    <span>
      <strong
        style={{
          color: "seagreen",
          fontSize: "120px",
          cursor: "pointer",
          marginRight: "20px"
        }}
        onClick={action}
      >
        {letter}
      </strong>
      {children}
    </span>
  );
};

const Letter = ({ letter, index, setPhoto }) => {
  const [play, setPlay] = useState(false);
  const { audio, photo } = ASSETS[index];

  const onClick = () => {
    audio && setPlay(!play);
    photo && setPhoto(photo);
  };

  return (
    <ClickableLetter letter={letter} action={onClick}>
      <AudioPlay src={audio} shouldPlay={play} setPlay={setPlay} />
    </ClickableLetter>
  );
};

const ASSETS = {
  0: { audio: saimonAndEulaliaAudio, photo: saimonAndEulaliaPhoto },
  1: { audio: marioAudio, photo: marioPhoto },
  2: { audio: sofiaAudio, photo: sofiaPhoto },
  3: { audio: androullaAudio, photo: androullaPhoto },
  4: { audio: polAudio, photo: polPhoto },
  5: { audio: eliaAudio, photo: eliaPhoto }
};

const JOANNE = "JOANNE".split("");

function App() {
  const [photo, setPhoto] = useState(flors);

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color: "darksalmon" }}>Happy Birthday</h1>
        <img
          src={photo}
          width={500}
          height={500}
          alt="Να ζησεις αδερφουλλα μου. Σ'αγαπω ❤️"
        />
        <div>
          {JOANNE.map((letter, index) => (
            <Letter
              letter={letter}
              index={index}
              key={index}
              setPhoto={setPhoto}
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
