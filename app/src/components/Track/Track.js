import React, { useEffect, useState } from "react";
import "./track.css";
import Visualizer from "../Visualiser/Visualiser";
import PlayIcon from "../Icons/PlayIcon";
import PauseIcon from "../Icons/PauseIcon";

function Track({ track, handleClick, isPlaying }) {
  const [time, setTime] = useState(30);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const decreaseTime = () => {
      setTime((prevTime) => {
        const newTime = prevTime - 1;
        if (newTime <= 0) {
          return "00";
        }
        return newTime < 10 ? `0${newTime}` : newTime;
      });
    };

    const startDecrease = () => {
      if (intervalId) {
        clearInterval(intervalId);
      }

      const intId = setInterval(decreaseTime, 1005);
      setIntervalId(intId);
    };

    const stopDecrease = () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
      setTime(30);
    };

    if (isPlaying) {
      startDecrease();
    } else {
      stopDecrease();
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  return (
    <div className="track">
      <div className="track-img">
        <img src={track.album.cover_small} alt={track.title} />
      </div>
      <div className="track-info">
        <p className="track-title">{track.title}</p>
        <p className="track-artist">{track.artist.name}</p>
        <p className="track-album">{track.album.title}</p>
      </div>
      <div className="track-control">
        <button
          className="track-button"
          onClick={() => handleClick(track.preview)}
        >
          {!isPlaying && <PlayIcon />}
          {isPlaying && <PauseIcon />}
        </button>
      </div>
      <Visualizer isPlaying={isPlaying} />
      <div className="timeRemaining">
        <span className="mins">00</span>
        <span className="seconds">:{time}</span>
      </div>
    </div>
  );
}

export default Track;

// https://cdns-preview-4.dzcdn.net/stream/c-451da67315b6187b9ce9abf1f24fe74e-1.mp3
// https://cdns-preview-1.dzcdn.net/stream/c-1b80037ab63d8db7d4304462778f416e-6.mp3
