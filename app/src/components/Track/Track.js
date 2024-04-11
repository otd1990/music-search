import React from "react";
import "./track.css";

function Track({ track, handleClick, progress }) {
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
        <button onClick={() => handleClick(track.preview)}>Play</button>
      </div>
    </div>
  );
}

export default Track;

// https://cdns-preview-4.dzcdn.net/stream/c-451da67315b6187b9ce9abf1f24fe74e-1.mp3
// https://cdns-preview-1.dzcdn.net/stream/c-1b80037ab63d8db7d4304462778f416e-6.mp3
