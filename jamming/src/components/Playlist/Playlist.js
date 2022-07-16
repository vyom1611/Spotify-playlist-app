import React from 'react'
import './Playlist.css'
import TrackList from '../TrackList/TrackList'

function Playlist(props) {

  //Name change function
  const handleNameChange = (event) => {
    props.onNameChange(event.target.value)
  }

  return (
    <div className="Playlist">
        <input defaultValue={props.playlistName} onChange={handleNameChange}/>
        <TrackList tracks={props.playlistTracks} onRemove={props.onRemove} isRemoval={true}/>
        <button className="Playlist-save" onClick={props.onSave}>SAVE TO SPOTIFY</button>
      </div>
  )
}

export default Playlist