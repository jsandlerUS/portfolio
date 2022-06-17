import React, { useState, useEffect } from "react";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import frozenHeart from "../../resources/Music/frozen-heart.mp3";
import adventureIsCalling from "../../resources/Music/adventure-is-calling.mp3";
import tides from "../../resources/Music/tides.mp3";

import nightCrickets from "../../resources/Music/crickets.mp3";
import dayBirds from "../../resources/Music/birds.mp3";

const MusicPlay = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(new Audio(tides));
  const [currentSong, setCurrentSong] = useState(0);
  const audioList = [tides, adventureIsCalling, frozenHeart];

  const [natureSound, setNatureSound] = useState(new Audio(dayBirds));
  const [currentNatureSound, setCurrentNatureSound] = useState(0);
  const natureList = [dayBirds, nightCrickets];

  useEffect(() => {
    audio.volume = 0.05;
    playPause(audio);
  }, []);

  useEffect(() => {
    natureSound.volume = 0.025;
    natureSound.play();
  }, []);

  useEffect(() => {
    natureSound.addEventListener("ended", () => nextSong("nature"));
  }, [natureSound]);

  useEffect(() => {
    audio.addEventListener("ended", () => nextSong("background"));
  }, [audio]);

  const nextSong = (musicType) => {
    if (musicType === "background") {
      const index = currentSong === audioList.length - 1 ? 0 : currentSong + 1;
      const song = new Audio(audioList[index]);
      song.volume = 0.05;
      song.play();
      setAudio(song, setCurrentSong(index));
    } else if (musicType === "nature") {
      const index =
        currentNatureSound === natureList.length - 1
          ? 0
          : currentNatureSound + 1;
      const song = new Audio(natureList[index]);
      song.volume = 0.025;
      song.play();
      setNatureSound(song, setCurrentNatureSound(index));
    }
  };

  const playPause = (song) => {
    isPlaying ? song.pause() : song.play();
    isPlaying ? natureSound.pause() : natureSound.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="audioWrapper">
      {isPlaying ? (
        <PauseCircleFilledIcon onClick={() => playPause(audio)} />
      ) : (
        <PlayCircleIcon onClick={() => playPause(audio)} />
      )}
    </div>
  );
};


// const playSound = (arraybuffer) => {
//   var context	= new AudioContext();

//   var source = context.createBufferSource();
//   context.decodeAudioData(arraybuffer, function (buffer) {
//       source.buffer = buffer;
//   });

//   var analyser = context.createAnalyser();
//   analyser.smoothingTimeConstant = 0.3;
//   analyser.fftSize = 1024;

//   var jsNode = context.createScriptProcessor(2048, 1, 1);
//   jsNode.onaudioprocess = function() {
//       var array = new Uint8Array(analyser.frequencyBinCount);
//       analyser.getByteFrequencyData(array);
//       volumeBars.mono.style.height = Math.average(array) * 2 + "px";
//       volumeBars.mono.innerHTML = Math.floor(Math.average(array));
//   }

//   source.connect(analyser);
//   source.connect(context.destination);
//   jsNode.connect(context.destination);
//   analyser.connect(jsNode);

//   source.start();
// }


export default MusicPlay;
