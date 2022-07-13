import React from 'react'
import './Track.css'

function Track(props) {

  const addTrack = () => {
    props.onAdd(props.singleTrack);

  }

  return (
    <div class="Track">
        <div class="Track-information">
          <h3>{props.singleTrack.name}</h3>
          <p>{props.singleTrack.artist} | {props.singleTrack.album}</p>
        </div>
        {props.isRemoval ? props.isRemoval && <button class="Track-action" onClick={addTrack}>+</button> : <button class="Track-action" onClick={addTrack}>+</button>}
    </div>
  )
}

export default Track