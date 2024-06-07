import React, { useCallback } from "react";

import styles from "./Playlist.module.css";

import TrackList from "../TrackList/TrackList";

function Playlist(props) {
  const handleNameChange = useCallback(
    (event) => {
      props.onNameChange(event.target.value);
    },
    [props.onNameChange]
  );

  return (
    <div className={styles.Playlist}>
      <input onChange={handleNameChange} defaultValue={"New Playlist"} />
      <TrackList
        userSearchResults={props.playlistTracks}
        isRemoval={true}
        onRemove={props.onRemove}
      />
      <button className={styles['Playlist-save']} onClick={props.onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
};

export default Playlist;
