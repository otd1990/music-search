import React, { useState, useEffect } from "react";
import { searchTracks } from "./services/deezer";
import Track from "./components/Track/Track";
import SearchTracks from "./components/SearchTracks/SearchTracks";
import "./styles/App.css";

function App() {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentAudio, setCurrentAudio] = useState({
    currentAudioPlaying: false,
    src: null,
    audio: null,
  });

  const search = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const data = await searchTracks(query);
      console.log("App js data ", data);
      setTracks(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = (preview) => {
    if (currentAudio && currentAudio.currentAudioPlaying) {
      if (currentAudio.src === preview) {
        currentAudio.audio.pause();
        setCurrentAudio(null);
        return;
      } else {
        currentAudio.audio.pause();
      }
    }

    const audio = new Audio(preview);
    audio.play();

    setCurrentAudio({
      currentAudioPlaying: true,
      src: preview,
      audio: audio,
    });
  };

  return (
    <div className="app">
      <h1 className="title">Deezer Track Search</h1>
      <SearchTracks onSubmit={search} />
      {error && <p className="error">{error}</p>}
      {!loading && (
        <div className="track-list">
          {tracks.map((track) => (
            <Track key={track.id} track={track} handleClick={handleClick} />
          ))}
        </div>
      )}
      {loading && <p>Loading</p>}
    </div>
  );
}

export default App;
