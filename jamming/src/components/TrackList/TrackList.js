import React from 'react'
import './TrackList.css'
import Track from '../Track/Track'

function TrackList(props) {
  return (
    <div className="TrackList">
        {props.tracks.map(track => {return <Track singleTrack={track} key={track.id} onAdd={props.onAdd} /> })}
    </div>
  )
}

export default TrackList