// FileName: App.js
import { useEffect, useRef, useState } from "react";
import Player from "./components/PlayerSong";
import Song from "./components/Song";
import "./styles/app.scss";

// Importing DATA
import data from "./data";
import Library from "./components/Library";
import Nav from "./components/Navb";

  function Playlist({ weatherDescription }) {
  const [songs, setSongs] = useState(data);

  

  const filteredSongs = songs.filter((song) => song?.weatherDescription === "light snow");

 console.log(weatherDescription);
console.log(filteredSongs);
  const [currentSong, setCurrentSong] = useState(filteredSongs[0]);

  useEffect(() => {
    setCurrentSong(filteredSongs[0]);
  }, [filteredSongs]);

  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const audioRef = useRef(null);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({
      currentTime: current,
      duration,
      animationPercentage: animation,
    });
  };

  const songEndHandler = async () => {
    let currentIndex = filteredSongs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(filteredSongs[(currentIndex + 1) % filteredSongs.length]);
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div className="playlist">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      {currentSong && <Song currentSong={currentSong} />}
      <Player
        id={filteredSongs.id}
        songs={filteredSongs}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
        setSongs={setSongs}
        isPlaying={isPlaying}
        audioRef={audioRef}
        songs={filteredSongs}
        setCurrentSong={setCurrentSong}
        weatherDescription={weatherDescription}
      />
      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        src={currentSong?.audio}
        ref={audioRef}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
}

export default Playlist;
