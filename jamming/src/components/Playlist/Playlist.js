import React from 'react'
import './Playlist.css'
import TrackList from '../TrackList/TrackList'

function Playlist(props) {
  return (
    <div className="Playlist">
        <input value="New Playlist"/>
        <TrackList tracks={props.playlistTracks} onRemove={props.onRemove} isRemoval={true}/>
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
  )
}

export default Playlist