import React from "react";

import styles from "./TrackList.module.css";

import Track from "../Track/Track";

function TrackList(props){
  return (
    <div className={styles.TrackList}>
      {props.userSearchResults.map((track) => (
          <Track
            track={track}
            key={track.id}
            onAdd={props.onAdd}
            isRemoval={props.isRemoval}
            onRemove={props.onRemove}
          />
      ))}
    </div>
  );
};

export default TrackList;
