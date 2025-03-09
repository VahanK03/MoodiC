// FileName: Library.js

import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
    songs,
    setCurrentSong,
    audioRef,
    isPlaying,
    setSongs,
    setLibraryStatus,
    libraryStatus,
    weatherDescription
}) => {

    // const monthNames = [
    //     "January", "February", "March", "April", "May", "June",
    //     "July", "August", "September", "October", "November", "December"
    //   ];
    
    //   const currentMonth = new Date().getMonth(); 
    //   const monthName = monthNames[currentMonth];

    return (
        <div className={`library ${libraryStatus ? "active" : ""}`}>
            <h2 style={{ color: "white" }}>Playlist for <span className="weather-text">{weatherDescription}</span></h2>
            <div className="library-songs">
                {songs.map((song) => (
                    <LibrarySong
                        setSongs={setSongs}
                        isPlaying={isPlaying}
                        audioRef={audioRef}
                        songs={songs}
                        song={song}
                        setCurrentSong={setCurrentSong}
                        id={song.id}
                        key={song.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default Library;
