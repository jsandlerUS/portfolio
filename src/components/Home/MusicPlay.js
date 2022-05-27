import React, { useState, useEffect } from "react";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import frozenHeart from "../../resources/frozen-heart.mp3";
import adventureIsCalling from "../../resources/adventure-is-calling.mp3";

import nightCrickets from "../../resources/night-crickets.mp3";
import dayBirds from "../../resources/day-birds.mp3";

const MusicPlay = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(new Audio(adventureIsCalling));
  const [currentSong, setCurrentSong] = useState(0);
  const audioList = [adventureIsCalling, frozenHeart];

  const [natureSound, setNatureSound] = useState(new Audio(dayBirds));
  const [currentNatureSound, setCurrentNatureSound] = useState(0);
  const natureList = [dayBirds, nightCrickets];

  useEffect(() => {
    audio.volume = 0.02;
    playPause(audio);
  }, []);

  useEffect(() => {
    natureSound.volume = 0.03;
    natureSound.play();
  }, []);

  useEffect(() => {
    natureSound.addEventListener("ended", () => nextSong("nature"));
  }, [natureSound]);

  useEffect(() => {
    audio.addEventListener("ended", () => nextSong("background"));
  }, [audio]);

  const nextSong = (musicType) => {
    // console.log("run next song");
    if (musicType === "background") {
      const index = currentSong === audioList.length - 1 ? 0 : currentSong + 1;
      // console.log(index, currentSong, audioList[index]);
      const song = new Audio(audioList[index]);
      song.volume = 0.02;
      song.play();
      setAudio(song, setCurrentSong(index));
    } else if (musicType === "nature") {
      const index =
        currentNatureSound === natureList.length - 1
          ? 0
          : currentNatureSound + 1;
      // console.log(index, currentNatureSound, natureList[index]);
      const song = new Audio(natureList[index]);
      song.volume = 0.03;
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

export default MusicPlay;
